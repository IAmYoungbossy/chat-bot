"use client";

// External Packages
import { useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";

// Components
import Loader from "../../utils/Loader";
import ChatNavList from "./ChatNavList";
import ErrorScreen from "../../utils/ErrorScreen";

// Utilz
import fetchConversations from "./helpers/fetchConversation";

// Types
import useConversationContext from "@/customHooks/useConversationContext";

export default function ConversationList() {
  const [loading, setLoading] = useState(true);
  const { conversations, setConversations, error, router, setError } =
    useConversationContext();

  const { conversationId } = useParams();
  const activeConversationId = Number(conversationId);

  const fetchAndSetConversations = useCallback(() => {
    fetchConversations({
      setError,
      setLoading,
      setConversations,
    });
  }, [setError, setLoading, setConversations]);

  useEffect(() => {
    fetchAndSetConversations();
  }, [fetchAndSetConversations]);

  return loading ? (
    <Loader />
  ) : error ? (
    <ErrorScreen error={error} />
  ) : (
    <ChatNavList
      router={router}
      setError={setError}
      conversations={conversations}
      setConversations={setConversations}
      activeConversationId={activeConversationId}
    />
  );
}

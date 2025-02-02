"use client";

// Components
import ChatNavList from "./ChatNavList";

// External Packages
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

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

  return (
    <ChatNavList
      error={error}
      router={router}
      loading={loading}
      setError={setError}
      conversations={conversations}
      setConversations={setConversations}
      activeConversationId={activeConversationId}
    />
  );
}

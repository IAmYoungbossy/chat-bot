"use client";

// Components
import Loader from "../../utils/Loader";
import ErrorScreen from "../../utils/ErrorScreen";
import MessageInput from "./MessageInput";
import PreviousMessages from "./PreviousMessages";

// External Packages
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

// Utilz
import fetchMessages from "./helpers/fetchMessages";

// Types
import { MessageTypeProps } from "./types/message.type";
import { ChatWindowProps } from "./types/chatWindow.type";

export default function ChatWindow({
  conversationId,
}: ChatWindowProps) {
  const params = useParams();
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [messages, setMessages] = useState<MessageTypeProps[]>([]);

  const activeConversationId =
    conversationId || Number(params.conversationId);

  useEffect(() => {
    fetchMessages({
      setError,
      setLoading,
      setMessages,
      activeConversationId,
    });
  }, [activeConversationId]);

  return !conversationId ? null : loading ? (
    <Loader />
  ) : error ? (
    <ErrorScreen error={error} />
  ) : (
    <main className="flex flex-col h-full p-4 bg-gray-100">
      <PreviousMessages
        messages={messages}
        isBotTyping={isBotTyping}
      />
      <MessageInput
        input={input}
        setError={setError}
        setInput={setInput}
        isBotTyping={isBotTyping}
        setMessages={setMessages}
        setIsBotTyping={setIsBotTyping}
        activeConversationId={activeConversationId}
      />
    </main>
  );
}

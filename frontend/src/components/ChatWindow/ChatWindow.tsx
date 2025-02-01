"use client";

// External Packages
import Image from "next/image";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

// Components
import Loader from "../../utils/Loader";
import MessageInput from "./MessageInput";
import ErrorScreen from "../../utils/ErrorScreen";
import PreviousMessages from "./PreviousMessages";

// Utilz
import fetchMessages from "./helpers/fetchMessages";

// Types
import { MessageTypeProps } from "./types/message.type";
import { ChatWindowProps } from "./types/chatWindow.type";
import ChatIcon from "./ChatIcon";

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
    <main className="flex flex-col h-full bg-white rounded-[28px] flex-1 pb-7">
      <ChatWindowHeader />
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

const ChatWindowHeader = () => (
  <div className="py-2 px-5 border-b-[3px] border-[#cac4d0] mb-5">
    <ChatIcon imageURL="/chat-bot.svg" />
  </div>
);

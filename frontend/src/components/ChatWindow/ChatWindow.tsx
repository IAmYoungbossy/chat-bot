"use client";

import { useState, useEffect } from "react";
import Message from "../Message";
import { useParams } from "next/navigation";
import { ChatWindowProps } from "@/types/chatWindow.type";

interface MessageType {
  id: number;
  content: string;
  isUserMessage: boolean;
  createdAt: string;
}

export default function ChatWindow({
  conversationId,
}: ChatWindowProps) {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [input, setInput] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();
  const activeConversationId =
    conversationId || Number(params.conversationId);

  useEffect(() => {
    const fetchMessages = async () => {
      if (!activeConversationId) return;

      try {
        const response = await fetch(
          `/api/conversations/${activeConversationId}`
        );

        if (!response.ok) throw new Error("Failed to fetch messages");
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "An error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [activeConversationId]);

  const sendMessage = async () => {
    if (!input.trim() || !activeConversationId) return;

    const tempId = Date.now();
    setMessages((prev) => [
      ...prev,
      {
        id: tempId,
        content: input,
        isUserMessage: true,
        createdAt: new Date().toISOString(),
      },
    ]);
    setInput("");
    setIsBotTyping(true);

    try {
      const response = await fetch(
        `/api/conversations/${activeConversationId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ content: input }),
        }
      );
      if (!response.ok) throw new Error("Failed to send message");
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error("Failed to send message:", error);
      setMessages((prev) => prev.filter((msg) => msg.id !== tempId));
      setError(
        error instanceof Error ? error.message : "An error occurred"
      );
    } finally {
      setIsBotTyping(false);
    }
  };

  if (!conversationId) return null;
  else if (loading)
    return (
      <div className="flex-1 p-4 bg-gray-100">
        Loading messages...
      </div>
    );
  else if (error)
    return (
      <div className="flex-1 p-4 bg-gray-100 text-red-500">
        {error}
      </div>
    );

  return (
    <main className="flex flex-col h-full p-4 bg-gray-100">
      <div className="flex-1 overflow-y-auto">
        {messages.map((message) => (
          <Message
            key={message.id}
            message={message}
          />
        ))}
        {isBotTyping && (
          <div className="flex items-center mt-2">
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce mx-1" />
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce mx-1 delay-100" />
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce mx-1 delay-200" />
          </div>
        )}
      </div>
      <div className="mt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="w-full p-2 border rounded placeholder:text-gray-900 text-black"
          placeholder="Type a message..."
          disabled={isBotTyping}
        />
      </div>
    </main>
  );
}

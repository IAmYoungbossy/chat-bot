"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

interface Conversation {
  id: number;
  createdAt: string;
}

export default function ConversationList() {
  const [conversations, setConversations] = useState<Conversation[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();
  const router = useRouter();
  const activeConversationId = Number(params.conversationId);

  const fetchConversations = async () => {
    try {
      const response = await fetch("/api/conversations");
      if (!response.ok)
        throw new Error("Failed to fetch conversations");
      const data = await response.json();
      setConversations(data);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "An error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  const createConversation = async () => {
    try {
      const response = await fetch("/api/conversations", {
        method: "POST",
      });
      if (!response.ok)
        throw new Error("Failed to create conversation");
      const newConversation = await response.json();
      setConversations((prev) => [...prev, newConversation]);
      router.push(`/chat/${newConversation.id}`);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "An error occurred"
      );
    }
  };

  const deleteConversation = async (conversationId: number) => {
    try {
      const response = await fetch(
        `/api/conversations/${conversationId}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok)
        throw new Error("Failed to delete conversation");
      setConversations((prev) =>
        prev.filter((conv) => conv.id !== conversationId)
      );
      if (conversationId === activeConversationId)
        router.push("/chat");
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "An error occurred"
      );
    }
  };

  useEffect(() => {
    fetchConversations();
  }, []);

  if (loading)
    return (
      <div className="w-64 bg-gray-800 p-4 text-white">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="w-64 bg-gray-800 p-4 text-red-500">{error}</div>
    );

  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-lg font-bold mb-4">Conversations</h2>
      <button
        onClick={createConversation}
        className="w-full p-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        New Conversation
      </button>
      <ul>
        {conversations.map((conversation) => (
          <li
            key={conversation.id}
            className="mb-2"
          >
            <Link href={`/chat/${conversation.id}`}>
              <a
                className={`block p-2 rounded ${
                  conversation.id === activeConversationId
                    ? "bg-blue-500"
                    : "hover:bg-gray-700"
                }`}
              >
                Conversation {conversation.id}
              </a>
            </Link>
            <ul>
              {conversations.map((conversation) => (
                <li
                  key={conversation.id}
                  className="mb-2 flex justify-between items-center"
                >
                  <Link href={`/chat/${conversation.id}`}>
                    <a
                      className={`block p-2 rounded flex-1 ${
                        conversation.id === activeConversationId
                          ? "bg-blue-500"
                          : "hover:bg-gray-700"
                      }`}
                    >
                      Conversation {conversation.id}
                    </a>
                  </Link>
                  <button
                    onClick={() =>
                      deleteConversation(conversation.id)
                    }
                    className="p-2 text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

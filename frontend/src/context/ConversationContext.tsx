"use client";

import { useState, createContext } from "react";
import { ConversationProps } from "@/types/conversation.type";
import { ConversationContextProps } from "@/types/conversationContext.type";
import { useRouter } from "next/navigation";

export const ConversationContext = createContext<
  ConversationContextProps | undefined
>(undefined);

export const ConversationProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const router = useRouter();
  const [conversations, setConversations] = useState<
    ConversationProps[]
  >([]);
  const [error, setError] = useState<string | null>(null);

  const value = {
    error,
    router,
    setError,
    conversations,
    setConversations,
  };

  return (
    <ConversationContext.Provider value={value}>
      {children}
    </ConversationContext.Provider>
  );
};

"use client";

// External Packages
import { useRouter } from "next/navigation";
import { useState, createContext } from "react";

// Types
import { ConversationContextProps } from "@/types/conversationContext.type";
import { ConversationProps } from "@/components/ConversationList/types/conversation.type";

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

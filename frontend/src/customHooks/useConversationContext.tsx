import { useContext } from "react";
import { ConversationContext } from "@/context/ConversationContext";
import { ConversationContextProps } from "@/types/conversationContext.type";

// Custom hook for using the context
const useConversationContext = (): ConversationContextProps => {
  const context = useContext(ConversationContext);
  if (context === undefined) {
    throw new Error(
      "useConversationContext must be used within a ConversationContext"
    );
  }
  return context;
};

export default useConversationContext;

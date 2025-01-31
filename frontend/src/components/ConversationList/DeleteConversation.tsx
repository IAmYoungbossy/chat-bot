"use client";

// Helpers
import deleteConversation from "./helpers/deleteConversation";

// Custom Hooks
import useConversationContext from "@/customHooks/useConversationContext";

// Types
import { DeleteConversationProps } from "./types/deleteConversation.type";

const DeleteConversation = ({
  conversationId,
  activeConversationId,
}: DeleteConversationProps) => {
  const { router, setError, setConversations } =
    useConversationContext();

  return (
    <button
      className="p-2 text-red-500 hover:text-red-700"
      onClick={deleteConversation.bind(null, {
        router,
        setError,
        conversationId,
        setConversations,
        activeConversationId,
      })}
    >
      Delete
    </button>
  );
};

export default DeleteConversation;

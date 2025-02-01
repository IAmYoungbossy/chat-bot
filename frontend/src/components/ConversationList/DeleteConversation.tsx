"use client";

// Icons
import SvgIcon from "@mui/material/SvgIcon";

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
      type="button"
      title="Delete"
      aria-label="Delete conversation"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        deleteConversation({
          router,
          setError,
          conversationId,
          setConversations,
          activeConversationId,
        });
      }}
    >
      <SvgIcon>
        <path
          className="hover:fill-red-600"
          fill="#49454F"
          d="M7 21q-.824 0-1.412-.587A1.93 1.93 0 0 1 5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .824-.587 1.413A1.93 1.93 0 0 1 17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2z"
        ></path>
      </SvgIcon>
    </button>
  );
};

export default DeleteConversation;

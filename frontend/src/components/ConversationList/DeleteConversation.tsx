"use client";

// Components
import DeleteModal from "./DeleteModal";

// External Packages
import Button from "@mui/material/Button";
import SvgIcon from "@mui/material/SvgIcon";
import { useState, MouseEvent, useCallback } from "react";

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
  const [open, setOpen] = useState(false);

  const { router, setError, setConversations } =
    useConversationContext();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();
      deleteConversation({
        router,
        setError,
        conversationId,
        setConversations,
        activeConversationId,
      });
    },
    [conversationId, activeConversationId]
  );

  return (
    <>
      <Button
        type="button"
        title="Delete"
        onClick={handleOpen}
        sx={{
          top: "14px",
          right: "16px",
          padding: "2px",
          minWidth: "auto",
          position: "absolute",
          ".MuiTouchRipple-child": {
            backgroundColor: "#ff00009e",
          },
        }}
        aria-label="Delete conversation"
      >
        <SvgIcon>
          <path
            fill="#49454F"
            className="hover:fill-red-600"
            d="M7 21q-.824 0-1.412-.587A1.93 1.93 0 0 1 5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .824-.587 1.413A1.93 1.93 0 0 1 17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2z"
          ></path>
        </SvgIcon>
      </Button>
      <DeleteModal
        open={open}
        onDelete={handleDelete}
        handleClose={handleClose}
        conversationId={conversationId}
      />
    </>
  );
};

export default DeleteConversation;

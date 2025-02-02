// External Packages
import { memo } from "react";
import { IconButton } from "@mui/material";
// Helpers
import sendMessage from "./helpers/SendMessage";
// Types
import { SendMessageProps } from "./types/message.type";

const SendMessageBtn = memo(
  ({
    input,
    setError,
    setInput,
    setMessages,
    setIsBotTyping,
    activeConversationId,
  }: SendMessageProps) => {
    return (
      <IconButton
        onClick={sendMessage.bind(null, {
          input,
          setError,
          setInput,
          setMessages,
          setIsBotTyping,
          activeConversationId,
        })}
        onKeyDown={(e) =>
          e.key === "Enter" &&
          sendMessage({
            input,
            setError,
            setInput,
            setMessages,
            setIsBotTyping,
            activeConversationId,
          })
        }
        sx={{
          width: 48,
          height: 48,
          bottom: "4px",
          right: "24px",
          borderRadius: "50%",
          position: "absolute",
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "rgba(73, 69, 79, 0.1)",
          },
        }}
        aria-label="Send message"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          fill="none"
          viewBox="0 0 48 48"
          style={{ width: "32px", height: "32px" }}
        >
          <g clipPath="url(#clip0_5334_2410)">
            <path
              fill="#49454F"
              d="M15 32V16l19 8zm2-3 11.85-5L17 19v3.5l6 1.5-6 1.5zm0 0V19v10"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_5334_2410">
              <rect
                width="40"
                height="40"
                x="4"
                y="4"
                fill="#fff"
                rx="20"
              ></rect>
            </clipPath>
          </defs>
        </svg>
      </IconButton>
    );
  }
);

SendMessageBtn.displayName = "SendMessageBtn";
export default SendMessageBtn;

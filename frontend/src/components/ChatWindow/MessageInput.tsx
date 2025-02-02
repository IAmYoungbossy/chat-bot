// External Packages
import { memo, useState } from "react";
import { TextField } from "@mui/material";

// Components
import SendMessageBtn from "./SendMessageBtn";

// Helpers
import sendMessage from "./helpers/SendMessage";

// Types
import { SendMessageProps } from "./types/message.type";

const MessageInput = memo(
  ({
    setError,
    isBotTyping,
    setMessages,
    setIsBotTyping,
    activeConversationId,
  }: SendMessageProps & { isBotTyping: boolean }) => {
    const [messageInput, setMessageInput] = useState("");

    return (
      <div className="px-6 relative">
        <TextField
          fullWidth
          value={messageInput}
          disabled={isBotTyping}
          placeholder="Reply to Chatbot"
          onChange={(e) => setMessageInput(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" &&
            sendMessage({
              setError,
              setMessages,
              setIsBotTyping,
              input: messageInput,
              activeConversationId,
              setInput: setMessageInput,
            })
          }
          sx={{
            "& .MuiInputBase-root": {
              boxShadow: "none",
              borderBottom: "none",
              "&::before, &::after": {
                content: '""',
                border: "none",
                display: "none",
              },
            },
          }}
          slotProps={{
            input: {
              sx: {
                py: 1.5,
                px: 2.5,
                color: "#000",
                "&::placeholder": {
                  color: "#625B71",
                },
                borderRadius: "28px",
                backgroundColor: "#ece6f0",
                "&:hover": {
                  backgroundColor: "#dcd6e0",
                },
                "&.Mui-focused": {
                  boxShadow: "none",
                  backgroundColor: "#f7f2fa",
                },
                "&.Mui-disabled": {
                  color: "#b8b3c0",
                  backgroundColor: "#ece6f0",
                },
                transition: "all 0.3s ease-out",
              },
            },
          }}
          variant="standard"
        />
        <SendMessageBtn
          input={messageInput}
          setError={setError}
          setMessages={setMessages}
          setInput={setMessageInput}
          setIsBotTyping={setIsBotTyping}
          activeConversationId={activeConversationId}
        />
      </div>
    );
  }
);

MessageInput.displayName = "MessageInput";

export default MessageInput;

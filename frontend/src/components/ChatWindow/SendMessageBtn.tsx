// Helpers
import sendMessage from "./helpers/SendMessage";

// Types
import { SendMessageProps } from "./types/message.type";

const SendMessageBtn = ({
  input,
  setError,
  setInput,
  setMessages,
  setIsBotTyping,
  activeConversationId,
}: SendMessageProps) => {
  return (
    <button
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
      onClick={sendMessage.bind(null, {
        input,
        setError,
        setInput,
        setMessages,
        setIsBotTyping,
        activeConversationId,
      })}
      className="absolute bottom-1 right-7"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="none"
        viewBox="0 0 48 48"
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
    </button>
  );
};

export default SendMessageBtn;

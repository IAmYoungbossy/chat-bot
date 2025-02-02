// Components
import { memo, useState } from "react";
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
        <input
          type="text"
          value={messageInput}
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
          disabled={isBotTyping}
          placeholder="Reply to Chatbot"
          onChange={(e) => setMessageInput(e.target.value)}
          className="w-full py-4 px-5 pr-[3.125rem] placeholder:text-[#625B71] text-black rounded-[28px] bg-[#ece6f0] outline-none transition-all ease-out duration-300 hover:bg-[#dcd6e0] focus:bg-[#f7f2fa] focus:outline-[#79747e]"
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

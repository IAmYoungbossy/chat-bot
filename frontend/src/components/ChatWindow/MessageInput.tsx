// Components
import SendMessageBtn from "./SendMessageBtn";

// Helpers
import sendMessage from "./helpers/SendMessage";

// Types
import { SendMessageProps } from "./types/message.type";

const MessageInput = ({
  input,
  setError,
  setInput,
  isBotTyping,
  setMessages,
  setIsBotTyping,
  activeConversationId,
}: SendMessageProps & { isBotTyping: boolean }) => {
  return (
    <div className="mt-7 px-6 relative">
      <input
        type="text"
        value={input}
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
        disabled={isBotTyping}
        placeholder="Reply to Chatbot"
        onChange={(e) => setInput(e.target.value)}
        className="w-full py-4 px-5 pr-[3.125rem] placeholder:text-[#625B71] text-black rounded-[28px] bg-[#ece6f0] outline-none hover:bg-[#dcd6e0] focus:bg-[#f7f2fa] focus:outline-[#79747e]"
      />
      <SendMessageBtn
        input={input}
        setError={setError}
        setInput={setInput}
        setMessages={setMessages}
        setIsBotTyping={setIsBotTyping}
        activeConversationId={activeConversationId}
      />
    </div>
  );
};

export default MessageInput;

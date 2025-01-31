import sendMessage from "./helpers/SendMessage";
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
    <div className="mt-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
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
        className="w-full p-2 border rounded placeholder:text-gray-900 text-black"
        placeholder="Type a message..."
        disabled={isBotTyping}
      />
    </div>
  );
};

export default MessageInput;

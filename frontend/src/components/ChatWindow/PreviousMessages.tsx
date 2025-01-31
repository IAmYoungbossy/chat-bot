// Components
import Message from "./Message";
import BotTyping from "./BotTyping";

// Types
import { PreviousMessageProps } from "./types/message.type";

const PreviousMessages = ({
  messages,
  isBotTyping,
}: PreviousMessageProps) => {
  return (
    <div className="flex-1 overflow-y-auto">
      {messages.map((message) => (
        <Message
          key={message.id}
          message={message}
        />
      ))}
      {isBotTyping && <BotTyping />}
    </div>
  );
};

export default PreviousMessages;

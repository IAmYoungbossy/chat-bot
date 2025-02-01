// External Packages
import { Fragment } from "react";

// Components
import Message from "./Message";
import BotTyping from "./BotTyping";

// Helpers
import groupMessagesByDate, {
  formatDate,
} from "./helpers/groupMessagesByDate";

// Types
import { PreviousMessageProps } from "./types/message.type";

const PreviousMessages = ({
  messages,
  isBotTyping,
}: PreviousMessageProps) => {
  const groupedMessages = groupMessagesByDate(messages);

  return (
    <div className="flex-1 overflow-y-auto">
      {groupedMessages.map((messagesByDate) => {
        const date = formatDate(messagesByDate?.[0].createdAt);
        return (
          <Fragment key={date}>
            <div className="text-center leading-5 tracking-[0.25px] text-sm font-normal mt-7">
              {date}
            </div>
            {messagesByDate.map((message) => (
              <Message
                key={message.id}
                message={message}
              />
            ))}
            {isBotTyping && <BotTyping />}
          </Fragment>
        );
      })}
    </div>
  );
};

export default PreviousMessages;

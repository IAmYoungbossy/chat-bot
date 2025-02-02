"use client";

// Components
import Message from "./Message";
import Loader from "@/utils/Loader";

// External Packages
import { Fragment, memo, useEffect, useRef } from "react";

// Helpers
import groupMessagesByDate, {
  formatDate,
} from "./helpers/groupMessagesByDate";

// Types
import { PreviousMessageProps } from "./types/message.type";

const PreviousMessages = memo(
  ({
    loading,
    messages,
    isBotTyping,
    conversationId,
  }: PreviousMessageProps) => {
    const groupedMessages = groupMessagesByDate(messages);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
      messagesEndRef.current?.scrollTo({
        top: messagesEndRef.current.scrollHeight,
        behavior: "smooth",
      });
    };

    useEffect(() => {
      scrollToBottom();
    }, [messages.length]);

    return (
      <div
        ref={messagesEndRef}
        className="overflow-y-auto flex-1 h-full pt-5 pb-7 relative"
      >
        {conversationId && (
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
                      isBotTyping={
                        (message.isTyping ?? false) && isBotTyping
                      }
                    />
                  ))}
                </Fragment>
              );
            })}
          </div>
        )}
        <Loader loading={loading} />
      </div>
    );
  }
);

export default PreviousMessages;

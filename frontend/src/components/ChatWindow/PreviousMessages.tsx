"use client";

// Components
import Message from "./Message";
import Loader from "@/utils/Loader";

// Helpers
import groupMessagesByDate, {
  formatDate,
} from "./helpers/groupMessagesByDate";

// External Packages
import { Box, Typography } from "@mui/material";
import { Fragment, memo, useEffect, useRef } from "react";

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
      <Box
        sx={{
          pt: 5,
          pb: 7,
          flexGrow: 1,
          height: "100%",
          display: "flex",
          overflowY: "auto",
          position: "relative",
          flexDirection: "column",
        }}
      >
        {conversationId && (
          <Box
            ref={messagesEndRef}
            sx={{ flexGrow: 1, overflowY: "auto" }}
          >
            {groupedMessages.map((messagesByDate) => {
              const date = formatDate(messagesByDate?.[0].createdAt);
              return (
                <Fragment key={date}>
                  {/* Date Header */}
                  <Typography
                    align="center"
                    variant="subtitle2"
                    sx={{
                      mt: 7,
                      fontWeight: "normal",
                      color: "text.secondary",
                      letterSpacing: "0.25px",
                    }}
                  >
                    {date}
                  </Typography>

                  {/* Messages */}
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
          </Box>
        )}

        {/* Loading Indicator */}
        <Loader loading={loading} />
      </Box>
    );
  }
);

PreviousMessages.displayName = "PreviousMessages";
export default PreviousMessages;

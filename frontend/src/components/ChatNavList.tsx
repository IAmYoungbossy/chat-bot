import React, { Fragment } from "react";
import CreateConversationButton from "./CreateConversationButton";
import ConversationItem from "./ConversationItem";
import { ChatNavListProps } from "@/types/chatNavList.type";

const ChatNavList = ({
  router,
  setError,
  conversations,
  setConversations,
  activeConversationId,
}: ChatNavListProps) => {
  return (
    <nav className="w-64 bg-gray-800 text-white p-4">
      <CreateConversationButton
        router={router}
        setError={setError}
        setConversations={setConversations}
      />
      <ul>
        {conversations.map((conversation) => (
          <Fragment key={conversation.id}>
            <ConversationItem
              conversationId={conversation.id}
              activeConversationId={activeConversationId}
            />
          </Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default ChatNavList;

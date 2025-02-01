// External Packages
import { Fragment } from "react";

// Types
import { ChatNavListProps } from "./types/chatNavList.type";

// Components
import ConversationItem from "./ConversationItem";
import CreateConversationButton from "./CreateConversationButton";

const ChatNavList = ({
  router,
  setError,
  conversations,
  setConversations,
  activeConversationId,
}: ChatNavListProps) => {
  return (
    <nav className="max-w-nav-wide w-full text-white">
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

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
    <nav className="max-w-nav-wide w-full text-white h-full overflow-y-clip pt-1">
      <CreateConversationButton
        router={router}
        setError={setError}
        setConversations={setConversations}
      />
      <ul className="overflow-y-auto h-full pt-2 no-scrollbar">
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

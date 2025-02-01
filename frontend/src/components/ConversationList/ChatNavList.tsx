"use client";

// External Packages
import { Fragment } from "react";

// Types
import { ChatNavListProps } from "./types/chatNavList.type";

// Components
import ConversationItem from "./ConversationItem";
import CreateConversationButton from "./CreateConversationButton";

// Context
import useConversationContext from "@/customHooks/useConversationContext";

const ChatNavList = ({
  router,
  setError,
  conversations,
  setConversations,
  activeConversationId,
}: ChatNavListProps) => {
  const { isOpenMenu, setIsOpenMenu } = useConversationContext();

  return (
    <nav
      onClick={() => setIsOpenMenu(!isOpenMenu)}
      onKeyDown={(e) =>
        e.key === "Enter" && setIsOpenMenu(!isOpenMenu)
      }
      className={`md:max-w-nav-wide md:z-0 z-10 max-w-full md:backdrop-blur-0 md:bg-transparent bg-[#00000085] backdrop-blur-xl md:w-[21.7361111%] w-full md:static fixed inset-0 transition-opacity duration-300 ${
        isOpenMenu
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } md:opacity-100 md:pointer-events-auto min-w-56 text-white h-full md:pt-1 pt-0`}
    >
      <div
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        className={`md:max-w-full max-w-[80%] overflow-y-clip h-full md:bg-transparent bg-[#FEF7FF] md:px-0 px-4 rounded-tr-[28px] rounded-br-[28px] md:pt-0 pt-6 transform transition-transform duration-300 ease-in-out ${
          isOpenMenu ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
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
      </div>
    </nav>
  );
};

export default ChatNavList;

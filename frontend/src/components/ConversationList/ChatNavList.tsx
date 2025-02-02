"use client";

// External Packages
import { Fragment } from "react";
import { List, Box, Collapse } from "@mui/material";

// Types
import { ChatNavListProps } from "./types/chatNavList.type";

// Components
import Loader from "@/utils/Loader";
import ErrorScreen from "@/utils/ErrorScreen";
import ConversationItem from "./ConversationItem";
import CreateConversationButton from "./CreateConversationButton";

// Context
import useConversationContext from "@/customHooks/useConversationContext";

const ChatNavList = ({
  error,
  router,
  loading,
  setError,
  conversations,
  setConversations,
  activeConversationId,
}: ChatNavListProps) => {
  const { isOpenMenu, setIsOpenMenu } = useConversationContext();

  if (error) return <ErrorScreen error={error} />;

  return (
    <nav
      role="navigation"
      aria-label="Chat Navigation"
      onClick={() => setIsOpenMenu(!isOpenMenu)}
      onKeyDown={(e) =>
        e.key === "Enter" && setIsOpenMenu(!isOpenMenu)
      }
      className={`md:max-w-nav-wide md:z-0 z-10 max-w-full md:backdrop-blur-0 md:bg-transparent bg-[#00000085] backdrop-blur-xl md:w-[25%] w-full md:static absolute inset-0 transition-opacity duration-300 ${
        isOpenMenu
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } md:opacity-100 md:pointer-events-auto min-w-56 text-white md:h-full screen md:pt-4 pt-0`}
    >
      <Box
        component="div"
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

        <div className="overflow-y-auto overflow-x-visible h-full no-scrollbar border">
          <List
            component="ul"
            sx={{
              gap: 1,
              padding: 0,
              display: "flex",
              flexDirection: "column"
            }}
          >
            {conversations.map((conversation) => (
              <Fragment key={conversation.id}>
                <ConversationItem
                  conversationId={conversation.id}
                  activeConversationId={activeConversationId}
                />
              </Fragment>
            ))}
          </List>
          <Collapse in={loading}>
            <Loader loading={loading} />
          </Collapse>
        </div>
      </Box>
    </nav>
  );
};

export default ChatNavList;

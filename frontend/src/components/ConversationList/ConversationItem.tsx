// External Packages
import Link from "next/link";
import { Button } from "@mui/material";

// Components
import DeleteConversation from "./DeleteConversation";

// Types
import { ConversationItemProps } from "./types/conversationItem.type";

const ConversationItem = ({
  conversationId,
  activeConversationId,
}: ConversationItemProps) => {
  return (
    <li
      className={`w-full text-secondary rounded-2xl ${
        conversationId === activeConversationId
          ? "bg-[#d0c6de]"
          : "hover:bg-opacity-80 bg-[#e8def7]"
      } mt-1 relative`}
      role="listitem"
      aria-current={
        conversationId === activeConversationId ? "true" : undefined
      }
    >
      <Link
        passHref
        legacyBehavior
        href={`/chat/${conversationId}`}
      >
        <Button
          fullWidth
          component="a"
          disableRipple={false}
          sx={{
            px: 4,
            py: 2,
            gap: 4,
            borderRadius: 2,
            color: "inherit",
            textDecoration: "none",
            justifyContent: "flex-start",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.05)",
            },
            "&.Mui-focusVisible": {
              backgroundColor: "darkpurple",
            },

            ".MuiTouchRipple-child": {
              backgroundColor: "#64558e",
            },
          }}
          aria-label={`Open conversation ${conversationId}`}
        >
          <span className="font-roboto-only font-normal text-sm leading-6 tracking-[0.5px] w-23 whitespace-nowrap">
            Conversation {conversationId}
          </span>
        </Button>
      </Link>

      {/* Delete Conversation Component */}
      <DeleteConversation
        conversationId={conversationId}
        activeConversationId={activeConversationId}
      />
    </li>
  );
};

export default ConversationItem;

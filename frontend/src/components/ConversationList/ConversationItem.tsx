// External Packages
import Link from "next/link";
import { ListItem, Button } from "@mui/material";

// Components
import DeleteConversation from "./DeleteConversation";

// Types
import { ConversationItemProps } from "./types/conversationItem.type";

const ConversationItem = ({
  conversationId,
  activeConversationId,
}: ConversationItemProps) => {
  return (
    <ListItem
      className="w-full text-secondary rounded-2xl relative"
      role="listitem"
      sx={{
        ...(conversationId === activeConversationId
          ? { bgcolor: "#d0c6de" }
          : {
              bgcolor: "rgba(232, 222, 247, 1)",
              "&:hover": { bgcolor: "rgba(232, 222, 247, 0.8)" },
            }),
        py: 0,
      }}
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

      <DeleteConversation
        conversationId={conversationId}
        activeConversationId={activeConversationId}
      />
    </ListItem>
  );
};

export default ConversationItem;

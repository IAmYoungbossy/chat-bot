// MUI Components
import { Button } from "@mui/material";

// Helpers
import createConversation from "./helpers/createConversation";

// Icons
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

// Types
import { CreateConversationProps } from "./types/createConversation.type";

const CreateConversationButton = ({
  router,
  setError,
  setConversations,
}: CreateConversationProps) => {
  return (
    <Button
      onClick={createConversation.bind(null, {
        router,
        setError,
        setConversations,
      })}
      fullWidth
      sx={{
        py: 2,
        mb: 2,
        gap: 3,
        display: "flex",
        color: "#21005D",
        borderRadius: "2xl",
        fontSize: "0.875rem",
        fontFamily: "Roboto",
        fontWeight: "medium",
        alignItems: "center",
        letterSpacing: "0.1px",
        justifyContent: "center",
        backgroundColor: "#ebddff",
        "&:hover": {
          backgroundColor: "#d8cbff",
        },
        boxShadow:
          "0px 1px 3px 0px rgba(0, 0, 0, 0.302), 0px 4px 8px 3px rgba(0, 0, 0, 0.149)",
      }}
      aria-label="Create new conversation"
    >
      <AddCircleOutlineIcon />{" "}
      <span className="font-roboto-only font-medium text-sm leading-3 tracking-tightest">
        Conversations
      </span>
    </Button>
  );
};

export default CreateConversationButton;

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
    <button
      onClick={createConversation.bind(null, {
        router,
        setError,
        setConversations,
      })}
      className="w-full flex justify-center items-center py-4 mb-2 gap-3 text-primary bg-create-btn rounded-2xl shadow-xml"
      aria-label="Create new conversation"
      role="button"
    >
      <AddCircleOutlineIcon aria-hidden="true" />
      <span
        className="font-roboto-only font-medium text-sm leading-5 tracking-tightest w-23"
        aria-hidden="true"
      >
        Conversations
      </span>
    </button>
  );
};

export default CreateConversationButton;

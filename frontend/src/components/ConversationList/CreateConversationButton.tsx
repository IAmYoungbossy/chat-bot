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
      className="w-full flex justify-center items-center py-4 mb-4 gap-3 text-primary bg-create-btn rounded-2xl shadow-xml"
    >
      <AddCircleOutlineIcon />
      <span className="font-roboto-only font-medium text-sm leading-5 tracking-tightest w-23">
        Conversations
      </span>
    </button>
  );
};

export default CreateConversationButton;

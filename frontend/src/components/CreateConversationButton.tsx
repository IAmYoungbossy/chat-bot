import createConversation from "@/utils/createConversation";
import { CreateConversationProps } from "@/types/createConversation.type";

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
      className="w-full p-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Conversation
    </button>
  );
};

export default CreateConversationButton;

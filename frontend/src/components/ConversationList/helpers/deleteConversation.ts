// Types
import { DeleteConversationType } from "../types/deleteConversation.type";

const deleteConversation = async ({
  router,
  setError,
  conversationId,
  setConversations,
  activeConversationId,
}: DeleteConversationType) => {
  try {
    const response = await fetch(
      `/api/conversations/${conversationId}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok)
      throw new Error("Failed to delete conversation");
    setConversations((prev) =>
      prev.filter((conv) => conv.id !== conversationId)
    );
    if (conversationId === activeConversationId) router.push("/chat");
  } catch (error) {
    setError(
      error instanceof Error ? error.message : "An error occurred"
    );
  }
};

export default deleteConversation;

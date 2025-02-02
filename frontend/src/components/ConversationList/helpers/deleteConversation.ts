// Types
import { DeleteConversationType } from "../types/deleteConversation.type";

/**
 * Deletes a conversation by its ID and updates the conversation list.
 *
 * @param {Object} params - The parameters for deleting the conversation.
 * @param {NextRouter} params.router - The Next.js router instance for navigation.
 * @param {Function} params.setError - Function to set the error message in case of failure.
 * @param {string} params.conversationId - The ID of the conversation to be deleted.
 * @param {Function} params.setConversations - Function to update the list of conversations.
 * @param {string} params.activeConversationId - The ID of the currently active conversation.
 *
 * @throws Will throw an error if the conversation deletion fails.
 *
 * @returns {Promise<void>} A promise that resolves when the conversation is successfully deleted.
 */
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

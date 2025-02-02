// Types
import { CreateConversationProps } from "../types/createConversation.type";

/**
 * Creates a new conversation by making a POST request to the server.
 * If successful, updates the conversation list and navigates to the new conversation.
 * If an error occurs, sets the error message.
 *
 * @param {Object} params - The parameters for creating a conversation.
 * @param {NextRouter} params.router - The Next.js router instance for navigation.
 * @param {React.Dispatch<React.SetStateAction<string | null>>} params.setError - Function to set the error message.
 * @param {React.Dispatch<React.SetStateAction<Conversation[]>>} params.setConversations - Function to update the conversation list.
 *
 * @throws {Error} Throws an error if the conversation creation fails.
 */
const createConversation = async ({
  router,
  setError,
  setConversations,
}: CreateConversationProps) => {
  try {
    const response = await fetch("/api/conversations", {
      method: "POST",
    });
    if (!response.ok)
      throw new Error("Failed to create conversation");
    const newConversation = await response.json();
    setConversations((prev) => [...prev, newConversation]);
    router.push(`/chat/${newConversation.id}`);
  } catch (error) {
    setError(
      error instanceof Error ? error.message : "An error occurred"
    );
  }
};

export default createConversation;

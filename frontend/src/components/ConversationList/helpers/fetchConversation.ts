// Types
import { FetchConversationProps } from "../types/fetchConversation.type";

/**
 * Fetches the list of conversations from the server.
 *
 * @param {Object} params - The parameters for the function.
 * @param {Function} params.setError - Function to set the error state.
 * @param {Function} params.setLoading - Function to set the loading state.
 * @param {Function} params.setConversations - Function to set the conversations state.
 *
 * @returns {Promise<void>} A promise that resolves when the fetch operation is complete.
 *
 * @throws {Error} Throws an error if the fetch operation fails.
 */
const fetchConversations = async ({
  setError,
  setLoading,
  setConversations,
}: FetchConversationProps) => {
  try {
    const response = await fetch("/api/conversations");
    if (!response.ok)
      throw new Error("Failed to fetch conversations");
    const data = await response.json();
    setConversations(data);
  } catch (error) {
    setError(
      error instanceof Error ? error.message : "An error occurred"
    );
  } finally {
    setLoading(false);
  }
};

export default fetchConversations;

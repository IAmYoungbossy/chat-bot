// Types
import { FetchConversationProps } from "../types/fetchConversation.type";

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

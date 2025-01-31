// Types
import { FetchMessagesProps } from "../types/message.type";

const fetchMessages = async ({
  setError,
  setLoading,
  setMessages,
  activeConversationId,
}: FetchMessagesProps) => {
  if (!activeConversationId) return;

  try {
    const response = await fetch(
      `/api/conversations/${activeConversationId}`
    );

    if (!response.ok) throw new Error("Failed to fetch messages");
    const data = await response.json();
    setMessages(data);
  } catch (error) {
    setError(
      error instanceof Error ? error.message : "An error occurred"
    );
  } finally {
    setLoading(false);
  }
};

export default fetchMessages;

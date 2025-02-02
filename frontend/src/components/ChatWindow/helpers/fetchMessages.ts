// Types
import {
  MessageTypeProps,
  FetchMessagesProps,
} from "../types/message.type";

// Constants
import { messageInMemoryCache } from "@/constant/inMemoryCache";

/**
 * Fetches messages for the active conversation.
 *
 * @param {Object} params - The parameters for fetching messages.
 * @param {Function} params.setError - Function to set the error state.
 * @param {Function} params.setLoading - Function to set the loading state.
 * @param {Function} params.setMessages - Function to set the messages state.
 * @param {string | null} params.activeConversationId - The ID of the active conversation.
 *
 * @returns {Promise<void>} A promise that resolves when the messages have been fetched and state has been updated.
 *
 * @throws {Error} Throws an error if the fetch request fails.
 */
const fetchMessages = async ({
  setError,
  setLoading,
  setMessages,
  activeConversationId,
}: FetchMessagesProps) => {
  if (!activeConversationId) return;

  const { cachedData, cachedDataIndex } = checkMessageCache(
    activeConversationId
  );

  if (cachedData) setMessages(cachedData);

  try {
   if( !cachedData) setLoading(true);
    const response = await fetch(
      `/api/conversations/${activeConversationId}`
    );

    if (!response.ok) throw new Error("Failed to fetch messages");
    const data = (await response.json()) as MessageTypeProps[];
    setMessages(data);
    updateCache(data, cachedDataIndex, cachedData);
  } catch (error) {
    setError(
      error instanceof Error ? error.message : "An error occurred"
    );
  } finally {
    setLoading(false);
  }
};

/**
 * Updates the message cache with new data.
 *
 * @param data - The new message data to be cached.
 * @param cachedDataIndex - The index in the cache where the data should be updated.
 * @param cachedData - The existing cached data, if any.
 */
const updateCache = (
  data: MessageTypeProps[],
  cachedDataIndex: number,
  cachedData: MessageTypeProps[] | undefined
) => {
  if (cachedData && cachedDataIndex > 0) messageInMemoryCache.splice(cachedDataIndex, 1, data)
  else messageInMemoryCache.push(data);
};

/**
 * Checks the message cache for a specific conversation ID.
 *
 * This function searches through the in-memory message cache to find
 * messages that belong to the specified active conversation ID.
 *
 * @param activeConversationId - The ID of the active conversation to search for in the cache.
 * @returns An object containing the cached data and its index in the cache.
 *          - `cachedData`: The messages of the active conversation if found, otherwise undefined.
 *          - `cachedDataIndex`: The index of the cached data in the message cache array, or -1 if not found.
 */
const checkMessageCache = (activeConversationId: number) => {
  const findCachedDataPredicate = (
    conversation: MessageTypeProps[]
  ) => conversation?.[0]?.conversationId === activeConversationId;
  const cachedDataIndex = messageInMemoryCache.findIndex(
    findCachedDataPredicate
  );
  const cachedData = messageInMemoryCache.find(
    findCachedDataPredicate
  );

  return { cachedData, cachedDataIndex };
};

export default fetchMessages;

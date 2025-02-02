// Types
import {
  MessageTypeProps,
  FetchMessagesProps,
} from "../types/message.type";

// Constants
import { messageInMemoryCache } from "@/constant/inMemoryCache";

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

const updateCache = (
  data: MessageTypeProps[],
  cachedDataIndex: number,
  cachedData: MessageTypeProps[] | undefined
) => {
  if (cachedData && cachedDataIndex > 0) messageInMemoryCache.splice(cachedDataIndex, 1, data)
  else messageInMemoryCache.push(data);
};

const checkMessageCache = (activeConversationId: number) => {
  const findCachedDataPredicate = (
    conversation: MessageTypeProps[]
  ) => conversation[0].conversationId === activeConversationId;
  const cachedDataIndex = messageInMemoryCache.findIndex(
    findCachedDataPredicate
  );
  const cachedData = messageInMemoryCache.find(
    findCachedDataPredicate
  );

  return { cachedData, cachedDataIndex };
};

export default fetchMessages;

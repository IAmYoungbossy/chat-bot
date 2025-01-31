import { CreateConversationProps } from "@/types/createConversation.type";

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

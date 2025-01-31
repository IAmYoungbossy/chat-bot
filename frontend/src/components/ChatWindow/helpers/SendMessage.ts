// Types
import { SendMessageProps } from "../types/message.type";

const sendMessage = async ({
  input,
  setInput,
  setError,
  setMessages,
  setIsBotTyping,
  activeConversationId,
}: SendMessageProps) => {
  if (!input.trim() || !activeConversationId) return;

  const tempId = Date.now();
  setMessages((prev) => [
    ...prev,
    {
      id: tempId,
      content: input,
      isUserMessage: true,
      createdAt: new Date().toISOString(),
    },
  ]);
  setInput("");
  setIsBotTyping(true);

  try {
    const response = await fetch(
      `/api/conversations/${activeConversationId}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: input }),
      }
    );
    if (!response.ok) throw new Error("Failed to send message");
    const data = await response.json();
    setMessages(data);
  } catch (error) {
    console.error("Failed to send message:", error);
    setMessages((prev) => prev.filter((msg) => msg.id !== tempId));
    setError(
      error instanceof Error ? error.message : "An error occurred"
    );
  } finally {
    setIsBotTyping(false);
  }
};

export default sendMessage;

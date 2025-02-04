// Types
import { SendMessageProps } from "../types/message.type";

/**
 * Sends a message in the active conversation.
 *
 * @param {Object} params - The parameters for sending a message.
 * @param {string} params.input - The message content to be sent.
 * @param {Function} params.setInput - Function to update the input state.
 * @param {Function} params.setError - Function to set an error message.
 * @param {Function} params.setMessages - Function to update the messages state.
 * @param {Function} params.setIsBotTyping - Function to set the bot typing state.
 * @param {string} params.activeConversationId - The ID of the active conversation.
 *
 * @returns {Promise<void>} A promise that resolves when the message is sent.
 *
 * @throws {Error} Throws an error if the message fails to send.
 */
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
      conversationId: activeConversationId,
    },
    {
      content: "...",
      isTyping: true,
      isUserMessage: false,
      id: tempId + 0.33 + 0.1,
      createdAt: new Date().toISOString(),
      conversationId: activeConversationId,
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

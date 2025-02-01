import { MessageTypeProps } from "../types/message.type";

/**
 * Groups messages by the date they were created (ignoring the time).
 * @param messages - Array of messages to group
 * @returns An array of arrays, where each inner array contains messages grouped by their date.
 */
export const groupMessagesByDate = (messages: MessageTypeProps[]) => {
  const grouped = messages.reduce((acc, message) => {
    // Extract the date in YYYY-MM-DD format
    const date = new Date(message.createdAt)
      .toISOString()
      .split("T")[0];

    // Find the group for this date
    let group = acc.find(([groupDate]) => groupDate === date);

    // If no group exists for the date, create a new one
    if (!group) {
      group = [date, []];
      acc.push(group);
    }

    // Add the message to the group
    group[1].push(message);

    return acc;
  }, [] as [string, MessageTypeProps[]][]);

  // Return only the arrays of messages (dropping the date key if desired)
  return grouped.map(([, messages]) => messages);
};

export const formatDate = (createdAt: string) => {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(new Date(createdAt));
};

export default groupMessagesByDate;

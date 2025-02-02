import { MessageTypeProps } from "../types/message.type";

/**
 * Groups messages by the date they were created (ignoring the time).
 * @param messages - Array of messages to group
 * @returns An array of arrays, where each inner array contains messages grouped by their date.
 */
export const groupMessagesByDate = (messages: MessageTypeProps[]) => {
  const grouped = messages.reduce((acc, message) => {

    const date = new Date(message.createdAt)
      .toISOString()
      .split("T")[0];

    let group = acc.find(([groupDate]) => groupDate === date);

    if (!group) {
      group = [date, []];
      acc.push(group);
    }

    group[1].push(message);

    return acc;
  }, [] as [string, MessageTypeProps[]][]);

  return grouped.map(([, messages]) => messages);
};

/**
 * Formats a given date string into a more readable format.
 *
 * The formatted date will be in the "en-US" locale with the following format:
 * - Month: abbreviated (e.g., "Jan")
 * - Day: 2-digit (e.g., "01")
 * - Hour: 2-digit (e.g., "01")
 * - Minute: 2-digit (e.g., "30")
 * - Hour format: 12-hour clock with AM/PM
 *
 * @param createdAt - The date string to format.
 * @returns The formatted date string.
 */
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

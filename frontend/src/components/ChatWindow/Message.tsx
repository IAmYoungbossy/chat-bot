// Types
import ChatIcon from "./ChatIcon";
import { MessageProps } from "./types/message.type";

export default function Message({ message }: MessageProps) {
  return (
    <div
      className={`flex py-2 justify-start ${
        message.isUserMessage ? " flex-row-reverse" : ""
      } px-6 items-end gap-2`}
    >
      {message.isUserMessage ? (
        <ChatIcon imageURL="/user-icon.svg" />
      ) : (
        <ChatIcon imageURL="/chat-bot.svg" />
      )}
      <div
        className={`max-w-xs py-2.5 px-4 ${
          message.isUserMessage
            ? "bg-[#625B71] text-white rounded-[20px] rounded-br-[8px]"
            : "bg-[#ECE6F0] text-gray-800 rounded-[20px] rounded-bl-[8px]"
        }`}
      >
        <p>{message.content}</p>
      </div>
    </div>
  );
}

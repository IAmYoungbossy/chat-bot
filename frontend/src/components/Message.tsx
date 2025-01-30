interface MessageProps {
  message: {
    id: number;
    content: string;
    isUserMessage: boolean;
    createdAt: string;
  };
}

export default function Message({ message }: MessageProps) {
  const formattedDate = new Date(
    message.createdAt
  ).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      className={`flex my-2 ${
        message.isUserMessage ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-xs p-3 rounded-lg ${
          message.isUserMessage
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-800"
        }`}
      >
        <p>{message.content}</p>
        <p className="text-xs mt-1 opacity-70">{formattedDate}</p>
      </div>
    </div>
  );
}

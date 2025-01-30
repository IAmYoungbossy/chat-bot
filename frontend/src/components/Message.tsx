interface MessageProps {
  message: {
    id: number;
    content: string;
    isUserMessage: boolean;
    createdAt: string;
  };
}

const Message: React.FC<MessageProps> = ({ message }) => {
  return (
    <div className={`flex my-2 ${message.isUserMessage ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-xs p-3 rounded-lg ${
          message.isUserMessage ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
        }`}
      >
        {message.content}
      </div>
    </div>
  );
};

export default Message;

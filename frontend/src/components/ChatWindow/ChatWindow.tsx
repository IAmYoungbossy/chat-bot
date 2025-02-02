"use client";

// Components
import MessageInput from "./MessageInput";
import ErrorScreen from "../../utils/ErrorScreen";
import PreviousMessages from "./PreviousMessages";

// Utilz
import fetchMessages from "./helpers/fetchMessages";

// Types
import { MessageTypeProps } from "./types/message.type";
import { ChatWindowProps } from "./types/chatWindow.type";

// External Packages
import { useParams } from "next/navigation";
import { useState, useEffect, useCallback, memo } from "react";

// Icons
import ChatIcon from "./ChatIcon";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import useConversationContext from "@/customHooks/useConversationContext";

const ChatWindow = memo(({ conversationId }: ChatWindowProps) => {
  const params = useParams();
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [messages, setMessages] = useState<MessageTypeProps[]>([]);

  const activeConversationId =
    conversationId || Number(params.conversationId);

  const fetchAndSetMessages = useCallback(() => {
    fetchMessages({
      setError,
      setLoading,
      setMessages,
      activeConversationId,
    });
  }, [activeConversationId]);

  useEffect(() => {
    fetchAndSetMessages();
  }, [fetchAndSetMessages]);

  return error ? (
    <ErrorScreen error={error} />
  ) : (
    <main className="flex flex-col h-full md:bg-white bg-background rounded-[28px] flex-1 pb-7">
      <ChatWindowHeader />
      <PreviousMessages
        loading={loading}
        messages={messages}
        isBotTyping={isBotTyping}
        conversationId={conversationId}
      />
      <MessageInput
        input={input}
        setError={setError}
        setInput={setInput}
        isBotTyping={isBotTyping}
        setMessages={setMessages}
        setIsBotTyping={setIsBotTyping}
        activeConversationId={activeConversationId}
      />
    </main>
  );
});

const ChatWindowHeader = memo(() => (
  <div className="py-2 px-5 border-b-[2px] md:border-t-0 border-t-[2px] border-[#cac4d0] flex justify-between items-center">
    <ChatIcon imageURL="/chat-bot.svg" />
    <MobileMenu />
  </div>
));

const MobileMenu = memo(() => {
  const { isOpenMenu, setIsOpenMenu } = useConversationContext();

  const handleClick = useCallback(() => {
    setIsOpenMenu(!isOpenMenu);
  }, [isOpenMenu, setIsOpenMenu]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === "Enter") {
        setIsOpenMenu(!isOpenMenu);
      }
    },
    [isOpenMenu, setIsOpenMenu]
  );

  return (
    <button
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className="md:hidden inline"
    >
      <MenuOutlinedIcon />
    </button>
  );
});

MobileMenu.displayName = "MobileMenu";
ChatWindow.displayName = "ChatWindow";
ChatWindowHeader.displayName = "ChatWindowHeader";

export default ChatWindow;

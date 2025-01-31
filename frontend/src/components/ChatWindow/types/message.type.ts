import { Dispatch, SetStateAction } from "react";

export interface MessageTypeProps {
  id: number;
  content: string;
  createdAt: string;
  isUserMessage: boolean;
}

export interface SendMessageProps {
  input: string;
  activeConversationId: number;
  setInput: Dispatch<SetStateAction<string>>;
  setError: Dispatch<SetStateAction<string | null>>;
  setIsBotTyping: Dispatch<SetStateAction<boolean>>;
  setMessages: Dispatch<SetStateAction<MessageTypeProps[]>>;
}

type BaseSendMessageProps = Pick<
  SendMessageProps,
  "activeConversationId" | "setError" | "setMessages"
>;

export interface FetchMessagesProps extends BaseSendMessageProps {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export interface PreviousMessageProps {
  isBotTyping: boolean;
  messages: MessageTypeProps[];
}

import { ChatWindowProps } from "../../ChatWindow/types/chatWindow.type";
import { ConversationItemProps } from "./conversationItem.type";
import { CreateConversationProps } from "./createConversation.type";

type BaseConversationItemProps = Pick<
  ConversationItemProps,
  "activeConversationId"
>;

type BaseChatWindowProps = Pick<ChatWindowProps, "conversationId">;

export interface DeleteConversationProps
  extends BaseChatWindowProps,
    BaseConversationItemProps,
    ChatWindowProps {}

export interface DeleteConversationType
  extends CreateConversationProps,
    DeleteConversationProps {}

import { ConversationProps } from "./conversation.type";
import { ConversationItemProps } from "./conversationItem.type";
import { CreateConversationProps } from "./createConversation.type";

type BaseConversationItemProps = Pick<
  ConversationItemProps,
  "activeConversationId"
>;

export interface ChatNavListProps
  extends CreateConversationProps,
    BaseConversationItemProps {
  loading: boolean;
  error: string | null;
  conversations: ConversationProps[];
}

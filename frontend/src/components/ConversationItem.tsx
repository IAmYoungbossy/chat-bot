import Link from "next/link";
import { ConversationItemProps } from "@/types/conversationItem.type";
import DeleteConversation from "./DeleteConversation";

const ConversationItem = ({
  conversationId,
  activeConversationId,
}: ConversationItemProps) => (
  <li
    className={`flex justify-between bg-[#E8DEF8] text-[#1D1B20] items-center p-2 rounded ${
      conversationId === activeConversationId
        ? "bg-gray-400"
        : "hover:bg-gray-700"
    } mb-2`}
  >
    <Link href={`/chat/${conversationId}`}>
      <span>Conversation {conversationId}</span>
    </Link>
    <DeleteConversation
      activeConversationId={activeConversationId}
      conversationId={conversationId}
    />
  </li>
);

export default ConversationItem;

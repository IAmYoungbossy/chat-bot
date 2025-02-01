// External Packages
import Link from "next/link";

// Components
import DeleteConversation from "./DeleteConversation";

// Types
import { ConversationItemProps } from "./types/conversationItem.type";

const ConversationItem = ({
  conversationId,
  activeConversationId,
}: ConversationItemProps) => {
  return (
    <li
      className={`w-full text-secondary bg-[#e8def7] rounded-2xl ${
        conversationId === activeConversationId
          ? "bg-[#d0c6de]"
          : "hover:bg-opacity-80"
      } mt-1`}
      role="listitem"
      aria-current={
        conversationId === activeConversationId ? "true" : undefined
      }
    >
      <Link
        href={`/chat/${conversationId}`}
        className="w-full flex justify-between items-center px-4 py-[14.8px] gap-4"
        aria-label={`Open conversation ${conversationId}`}
      >
        <span
          className="font-roboto-only font-normal text-sm leading-6 tracking-[0.5px] w-23 whitespace-nowrap"
        >
          Conversation {conversationId}
        </span>
        <DeleteConversation
          conversationId={conversationId}
          activeConversationId={activeConversationId}
        />
      </Link>
    </li>
  );
};

export default ConversationItem;

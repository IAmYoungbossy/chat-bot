// External Packages
import { Dispatch, SetStateAction } from "react";

// Types
import { ConversationProps } from "../components/ConversationList/types/conversation.type";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export interface ConversationContextProps {
  isOpenMenu: boolean;
  error: string | null;
  router: AppRouterInstance;
  conversations: ConversationProps[];
  setIsOpenMenu: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<string | null>>;
  setConversations: Dispatch<SetStateAction<ConversationProps[]>>;
}

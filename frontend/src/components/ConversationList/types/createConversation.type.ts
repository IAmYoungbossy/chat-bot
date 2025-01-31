import { Dispatch, SetStateAction } from "react";
import { ConversationProps } from "./conversation.type";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export interface CreateConversationProps {
  router: AppRouterInstance;
  setError: Dispatch<SetStateAction<string | null>>;
  setConversations: Dispatch<SetStateAction<ConversationProps[]>>;
}

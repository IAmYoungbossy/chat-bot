import { Dispatch, SetStateAction } from "react";
import { CreateConversationProps } from "./createConversation.type";

type BaseConversationProps = Pick<
  CreateConversationProps,
  "setConversations" | "setError"
>;

export interface FetchConversationProps
  extends BaseConversationProps {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

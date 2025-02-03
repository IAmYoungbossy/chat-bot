"use client";

// Custom Hooks
import useConversationContext from "@/customHooks/useConversationContext";

// Helpers
import createConversation from "../ConversationList/helpers/createConversation";
import { MobileMenu } from "../ChatWindow/ChatWindow";

const StartUpScreen = () => {
  const { setConversations, router, setError } =
    useConversationContext();

  return (
    <div className="max-w-md mx-auto text-center p-4">
      <div className="absolute right-5 top-5">
        <MobileMenu />
      </div>
      <h2 className="text-xl font-semibold">Welcome to Chatbot</h2>
      <p className="text-base mt-2">
        Click{" "}
        <button
          onClick={createConversation.bind(null, {
            router,
            setError,
            setConversations,
          })}
          className="text-blue-600 underline font-medium hover:text-blue-800"
        >
          here
        </button>{" "}
        or use the <em className="font-medium">Conversation</em>{" "}
        button to start a new chat, or select an existing conversation
        from the list.
      </p>
    </div>
  );
};

export default StartUpScreen;

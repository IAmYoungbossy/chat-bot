"use client";

import useConversationContext from "@/customHooks/useConversationContext";
import createConversation from "@/components/ConversationList/helpers/createConversation";

const WelcomeScreen = () => {
  const { setConversations, router, setError } =
    useConversationContext();

  return (
    <div className="max-w-md mx-auto text-center p-4">
      <h2 className="text-xl font-semibold">
        Welcome to AdamantCode Chat Bot
      </h2>
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

export default WelcomeScreen;

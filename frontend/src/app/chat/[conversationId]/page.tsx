import ChatWindow from "@/components/ChatWindow/ChatWindow";

export default async function ChatPage({
  params,
}: {
  params: Promise<{ conversationId: string }>;
}) {
  const { conversationId } = await params;
  return (
    <div className="flex-1">
      <ChatWindow conversationId={Number(conversationId)} />
    </div>
  );
}

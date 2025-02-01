import ChatWindow from "@/components/ChatWindow/ChatWindow";

export default async function ChatPage({
  params,
}: {
  params: Promise<{ conversationId: string }>;
}) {
  const { conversationId } = await params;
  return <ChatWindow conversationId={Number(conversationId)} />;
}

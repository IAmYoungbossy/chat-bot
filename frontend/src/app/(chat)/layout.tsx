import ConversationList from '@/components/ConversationList';

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <ConversationList />
      {children}
    </div>
  );
}
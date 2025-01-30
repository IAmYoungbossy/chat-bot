import { useState, useEffect } from 'react';
import ChatWindow from '../components/ChatWindow';
import ConversationList from '../components/ConversationList';

interface Conversation {
  id: number;
  createdAt: string;
}

const Home: React.FC = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeConversationId, setActiveConversationId] = useState<number | null>(null);

  useEffect(() => {
    const fetchConversations = async () => {
      const response = await fetch('/api/conversations');
      const data = await response.json();
      setConversations(data);
    };

    fetchConversations();
  }, []);

  return (
    <div className="flex h-screen">
      <ConversationList 
        conversations={conversations} 
        activeConversationId={activeConversationId} 
      />
      <div className="flex-1">
        {activeConversationId ? (
          <ChatWindow conversationId={activeConversationId} />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            Select a conversation to start chatting
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

interface Conversation {
  id: number;
  createdAt: string;
}

export default function ConversationList() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const params = useParams();
  const activeConversationId = Number(params.conversationId);

  useEffect(() => {
    const fetchConversations = async () => {
      const response = await fetch('/api/conversations');
      const data = await response.json();
      setConversations(data);
    };

    fetchConversations();
  }, []);

  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-lg font-bold mb-4">Conversations</h2>
      <ul>
        {conversations.map((conversation) => (
          <li key={conversation.id} className="mb-2">
            <Link href={`/chat/${conversation.id}`}>
              <a
                className={`block p-2 rounded ${
                  conversation.id === activeConversationId 
                    ? 'bg-blue-500' 
                    : 'hover:bg-gray-700'
                }`}
              >
                Conversation {conversation.id}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
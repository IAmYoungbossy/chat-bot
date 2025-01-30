'use client';

import { useState, useEffect } from 'react';
import Message from './Message';
import { useParams } from 'next/navigation';

interface MessageType {
  id: number;
  content: string;
  isUserMessage: boolean;
  createdAt: string;
}

export default function ChatWindow({ conversationId }: { conversationId: number }) {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [input, setInput] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false);

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await fetch(`/api/conversations/${conversationId}/messages`);
      const data = await response.json();
      setMessages(data);
    };

    fetchMessages();
  }, [conversationId]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const tempId = Date.now();
    setMessages(prev => [
      ...prev,
      { id: tempId, content: input, isUserMessage: true, createdAt: new Date().toISOString() }
    ]);
    setInput('');
    setIsBotTyping(true);

    try {
      const response = await fetch(`/api/conversations/${conversationId}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: input }),
      });
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Failed to send message:', error);
      setMessages(prev => prev.filter(msg => msg.id !== tempId));
    } finally {
      setIsBotTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-full p-4 bg-gray-100">
      <div className="flex-1 overflow-y-auto">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        {isBotTyping && (
          <div className="flex items-center mt-2">
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce mx-1"></div>
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce mx-1 delay-100"></div>
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce mx-1 delay-200"></div>
          </div>
        )}
      </div>
      <div className="mt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          className="w-full p-2 border rounded"
          placeholder="Type a message..."
          disabled={isBotTyping}
        />
      </div>
    </div>
  );
}
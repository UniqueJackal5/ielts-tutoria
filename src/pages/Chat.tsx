import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

interface User {
  id: string;
  name: string;
}

interface Message {
  id: string;
  user: User;
  text: string;
  timestamp: number;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [joined, setJoined] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    socket.on('messages', (messages: Message[]) => {
      setMessages(messages);
    });

    socket.on('message', (message: Message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('messages');
      socket.off('message');
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleJoin = () => {
    socket.emit('join', name);
    setJoined(true);
  };

  const handleSendMessage = () => {
    socket.emit('message', message);
    setMessage('');
  };

  return (
    <div className="container mx-auto p-4">
      {!joined ? (
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="p-2 border rounded"
          />
          <button onClick={handleJoin} className="p-2 bg-blue-500 text-white rounded">
            Join
          </button>
        </div>
      ) : (
        <div className="flex flex-col h-[calc(100vh-2rem)]">
          <div className="flex-1 overflow-y-auto p-4 border rounded">
            {messages.map((msg) => (
              <div key={msg.id} className="mb-2">
                <strong>{msg.user.name}:</strong> {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="flex items-center gap-2 mt-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message"
              className="flex-1 p-2 border rounded"
            />
            <button onClick={handleSendMessage} className="p-2 bg-blue-500 text-white rounded">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;

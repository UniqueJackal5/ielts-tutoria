import { Server, Socket } from 'socket.io';
import http from 'http';

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

const users = new Map<string, User>();
const messages: Message[] = [];

export const initializeSocket = (server: http.Server) => {
  const io = new Server(server, {
    cors: {
      origin: '*',
    },
  });

  io.on('connection', (socket: Socket) => {
    console.log('a user connected');

    socket.on('join', (name: string) => {
      const user = { id: socket.id, name };
      users.set(socket.id, user);
      socket.emit('messages', messages);
      socket.broadcast.emit('user-joined', user);
    });

    socket.on('message', (text: string) => {
      const user = users.get(socket.id);
      if (user) {
        const message = { id: `${Date.now()}`, user, text, timestamp: Date.now() };
        messages.push(message);
        io.emit('message', message);
      }
    });

    socket.on('disconnect', () => {
      const user = users.get(socket.id);
      if (user) {
        users.delete(socket.id);
        io.emit('user-left', user);
      }
      console.log('user disconnected');
    });
  });

  return io;
};
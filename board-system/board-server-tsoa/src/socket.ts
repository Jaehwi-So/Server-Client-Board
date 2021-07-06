import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";
import Chat from "./models/chat";
import redis from 'socket.io-redis'
import winston from './config/winston';
const SocketIO = require('socket.io');
export const socket = (server, app) => {  
  const io = SocketIO(server, { 
      cors: {
      origin: 'http://localhost:4200',
      //origins: ['http://localhost:8080', 'http://localhost:4200'],
      methods: ["GET", "POST", "UPDATE", "DELETE"],
      //allowedHeaders: ["my-custom-header"],
      credentials: true
      }
  });

  const chat = io.of('/chat');

  io.adapter(redis({
    host: 'localhost',
    port: 6379
  }))

  //Room 사용 안할 때 Case
  io.on('connection', (socket) => {
    winston.info('client connect ' + process.pid)

    socket.on('disconnect', () => { //disconnect 이벤트 리스너
      winston.info('client disconnect ' + process.pid)
    });
    socket.on('chat', (data) => {   //chat 이벤트 리스너
      winston.info('chat event emit ' + process.pid)
      io.emit(data);
    });
  });

  //Room 사용 Case
  chat.on('connection', (socket) => {
    const roomId = socket.handshake.query.roomID; //Query로 받은 roomID
    socket.join(roomId);
    winston.info('Chat client connect ' + roomId + " " + process.pid);

    socket.on('disconnect', () => { //disconnect 이벤트 리스너
      winston.info('Chat client disconnect ' + process.pid);
      socket.leave(roomId);
    });
    socket.on('chat', (data) => {   //chat 이벤트 리스너
      console.log('chat event emit ' + process.pid);
      winston.info('Chat event emit ' + process.pid)
      socket.to(data.room).emit(data);
    });
  });

  app.set('io', io);
}



// emit : 룸에 있는 모든 클라이언트들에게 이벤트를 보낸다.
// const chat = io.of('/chat'); //특정 네임스페이스 내로 접속
// - chat.in('room').emit('이벤트 명', data); 특정 룸 내의 모든 클라이언트에게 송신
// - chat.emit('이벤트 명', data); 특정 네임스페이스 내의 모든 클라이언트에게 송신
// - chat.to(req.params.id).emit('이벤트 명', data); : 특정 네임스페이스 내의 어떤 room 내에 있는 모든 클라이언트에게 송신
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";
import Chat from "./models/chat";
const SocketIO = require('socket.io');
export const socket = (server, app) => {  
  const io = SocketIO(server, { 
      cors: {
      origin: 'http://localhost:4200',
      //origins: ['http://localhost:8080', 'http://localhost:4200'],
      methods: ["GET", "POST", "UPDATE", "DELETE"],
      allowedHeaders: ["my-custom-header"],
      credentials: true
      }
  });
  app.set('io', io);

  // /chat/{roomID} : chat 네임스페이스에 접속 시
  io.on('connection', (socket) => {
    console.log('client connect');

    socket.on('disconnect', () => { //disconnect 이벤트 리스너
      console.log('client disconnect');
    });
    socket.on('chat', (data) => {   //chat 이벤트 리스너
      console.log('chat event emit');
      io.emit(data);
    });
  });

}



// emit : 룸에 있는 모든 클라이언트들에게 이벤트를 보낸다.
// const chat = io.of('/chat'); //특정 네임스페이스 내로 접속
// - chat.in('room').emit('이벤트 명', data); 특정 룸 내의 모든 클라이언트에게 송신
// - chat.emit('이벤트 명', data); 특정 네임스페이스 내의 모든 클라이언트에게 송신
// - chat.to(req.params.id).emit('이벤트 명', data); : 특정 네임스페이스 내의 어떤 room 내에 있는 모든 클라이언트에게 송신
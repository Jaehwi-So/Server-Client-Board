import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  messages: Subject<any>;

  // Our constructor calls our wsService connect method
  constructor(private socketService : SocketService) {
    console.log('chat construct()');
    this.messages = <Subject<any>>socketService
      .connect()
      .map((response: any): any => {
        console.log('chat return()');
        return response;
      })
   }

  // Our simplified interface for sending
  // messages back to our socket.io server
  sendMsg(msg) {
    console.log('chat send()');
    this.messages.next(msg);
  }
}

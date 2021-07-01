import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as io from 'socket.io-client';
import * as Rx from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SocketService {

    // Our socket connection
    private socket;

    constructor() {console.log('socket construct()'); }
  
    connect(): Rx.Subject<MessageEvent> {
      console.log('socket connect()');
      // If you aren't familiar with environment variables then
      // you can hard code `environment.ws_url` as `http://localhost:5000`
      this.socket = io(environment.serverURL, {
        //withCredentials: true
      });
  
      // We define our observable which will observe any incoming messages
      // from our socket.io server.
      let chatObservable = new Observable(observer => {
          this.socket.on('chat', (data) => {
            console.log("Received message from Websocket Server", data)
            observer.next(data);
          })
          return () => {
            this.socket.disconnect();
            console.log('disconnected');
          }
      });
  
      // We define our Observer which will listen to messages
      // from our other components and send messages back to our
      // socket server whenever the `next()` method is called.
      let chatObserver = {
          next: (data: Object) => {
              console.log('next');
              this.socket.emit('chat', JSON.stringify(data));
          },
      };
  
      // we return our Rx.Subject which is a combination
      // of both an observer and observable.
      return Rx.Subject.create(chatObserver, chatObservable);
    }

}



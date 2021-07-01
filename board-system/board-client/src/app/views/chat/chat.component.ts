import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';
import { ChatModel, ChatRequestModel } from 'src/app/models/ChatModel';
import ResponseModel from 'src/app/models/ResponseModel';
import { ApiService } from 'src/app/service/api.service';
import { AuthService } from 'src/app/service/auth.service';
import { ChatService } from 'src/app/service/chat.service';
import { SocketService } from 'src/app/service/socket.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  apiUrl : string = environment.apiHost;
  chats : ChatModel[];
  insertForm: FormGroup;  //여러개의 FormControl을 다루기 위해 FormGroup 사용
  chatRequestModel: ChatRequestModel;
  private socket;
  ioConnection: any;
  connection : any;
  messages = [];

  constructor(private route : ActivatedRoute, 
    private fb: FormBuilder, 
    private apiService : ApiService, 
    private router : Router, 
    public authService : AuthService,
    private chatService : ChatService
    ) { 
    this.insertForm = this.fb.group({   //유효성 체크.
      content: ['', [Validators.required]],
    });
  }


  ngOnInit() {
    this.getList();
    this.chatService.messages.subscribe(msg => {
      console.log('sub', msg);
      this.getList();
    })
  }

  ngOnDestroy(){

  }
  getList(){
    const boards$ = this.apiService.get_api_request_signin(`${this.apiUrl}/chat?start=1&end=100`);
    boards$.subscribe((res : ResponseModel) => {
      if(res.success = true){
        this.chats = res.data;
      }
    });
  }
  updateRequestForm(){
    const { content } = this.insertForm.controls;
    this.chatRequestModel = {} as ChatRequestModel;
    this.chatRequestModel.content = content.value;
    this.chatRequestModel.uid = this.authService.id;
  }

  resetInput(){
    this.insertForm.setValue({
      content: ""
    })
  }
  onSubmit(){
    //this.chatService.sendMsg("Test Message");
    this.updateRequestForm()
    this.apiService.post_api_request_signin(`${this.apiUrl}/chat/1`, this.chatRequestModel)
    .subscribe((res : ResponseModel) => {
      if(res.success == true){
        console.log('성공');
      }
      else{
        console.log('실패.');
      }
    });
    this.resetInput();
  }

}

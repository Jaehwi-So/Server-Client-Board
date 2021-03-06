import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BoardModel, BoardRequestModel } from 'src/app/models/BoardModel';
import ResponseModel from 'src/app/models/ResponseModel';
import { ApiService } from 'src/app/service/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-board-insert-form',
  templateUrl: './board-insert-form.component.html',
  styleUrls: ['./board-insert-form.component.css']
})
export class BoardInsertFormComponent implements OnInit {
  boardModel : BoardModel;
  apiUrl = environment.apiHost;
  imageSrc : string | ArrayBuffer = '#';
  formData : FormData;
  insertForm: FormGroup;  //여러개의 FormControl을 다루기 위해 FormGroup 사용
  boardRequestModel : BoardRequestModel;


  constructor(private apiService : ApiService, private fb: FormBuilder, private router : Router) { 
    this.insertForm = this.fb.group({   //유효성 체크.
      title: ['', [Validators.required]],
      nick: ['', [Validators.required]],
      content: ['', [Validators.required]],
      ridx: ['']
    });
    this.boardRequestModel = {
      id : null,
      title : null,
      nick : null,
      content : null,
      ridx : null,
    }
  }

  ngOnInit() {
    
  }
  updateRequestForm(){
    const { title, content, nick, ridx } = this.insertForm.controls;
    this.boardRequestModel.title = title.value
    this.boardRequestModel.content = content.value
    this.boardRequestModel.nick = nick.value
    this.boardRequestModel.ridx = ridx.value || null
  }

  onFileChange(files : FileList){
    console.log(files);
    if (files && files.length > 0) {
      // For Preview
      const file = files[0];
      this.formData = new FormData();
      this.formData.append('file', file);      
      this.apiService.post_api_request_signin(`${this.apiUrl}/resource/single`, this.formData)
      .subscribe((res : ResponseModel) => {
        console.log('요청은 보냄');
        if(res.success == true){
          /* 브라우저는 보안 문제로 인해 파일 경로의 참조를 허용하지 않는다.
          따라서 파일 경로를 img 태그에 바인딩할 수 없다.
          FileReader.readAsDataURL 메소드를 사용하여 이미지 파일을 읽어
          base64 인코딩된 스트링 데이터를 취득한 후, img 태그에 바인딩한다. */
          this.insertForm.controls.ridx.setValue(res.data.id);
          reader.readAsDataURL(file);
          reader.onload = () => {
            this.imageSrc = reader.result;
          };  
          /* reactive form에서 input[type="file"]을 지원하지 않는다.
            즉 파일 선택 시에 값이 폼컨트롤에 set되지 않는다
            https://github.com/angular/angular.io/issues/3466
            form validation을 위해 file.name을 폼컨트롤에 set한다. */
          //this.insertForm.get('file').setValue(file.name);  
        }
        else{
          console.log('실패');
        }
      });
      const reader = new FileReader();


    }
  }

  onSubmit(){
    this.updateRequestForm()
    console.log(this.boardRequestModel);
    this.apiService.post_api_request_signin(`${this.apiUrl}/board`, this.boardRequestModel)
    .subscribe((res : ResponseModel) => {
      if(res.success == true){
        console.log('성공');
        alert("게시물을 등록하였습니다.")
        this.router.navigateByUrl('/board/list');
      }
      else{
        console.log('실패.');
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import { BoardModel } from 'src/app/models/BoardModel';
import ResponseModel from 'src/app/models/ResponseModel';
import { ApiService } from 'src/app/service/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-board-detail',
  templateUrl: './board-detail.component.html',
  styleUrls: ['./board-detail.component.css']
})
export class BoardDetailComponent implements OnInit {
  id : string;
  apiUrl = environment.apiHost;
  board : BoardModel;
  page : number = 0;
  
  constructor(private route : ActivatedRoute, private apiService : ApiService) { 
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.route.snapshot.queryParamMap.get('page')){
      this.page = Number(this.route.snapshot.queryParamMap.get('page'));
    }
    const board$ = this.apiService.get_api_request_signin(`${this.apiUrl}/board/${this.id}`);
    board$.subscribe((res : ResponseModel) => {
      if(res.success == true){
        this.board = res.data;
        console.log(this.board, this.board.title, this.board.content);
      }
    });
  }

  ngOnInit() {
    

  }

  loadImg(id : number) {
    if(id == null || id == undefined){
      return 'assets/img/lazyImage.jpg';
    }
    return `${this.apiUrl}/resource/image?id=${id}`;
  }

}

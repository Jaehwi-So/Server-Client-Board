import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { buffer } from 'rxjs-compat/operator/buffer';
import 'rxjs/add/operator/map';
import ResponseModel from 'src/app/models/ResponseModel';
import { ApiService } from 'src/app/service/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-board-detail',
  templateUrl: './board-detail.component.html',
  styleUrls: ['./board-detail.component.css']
})
export class BoardDetailComponent implements OnInit {
  private id : string;
  private apiUrl = environment.apiHost;
  private board : BoardModel;
  
  constructor(private route : ActivatedRoute, private apiService : ApiService) { 

  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    const board$ = this.apiService.get_api_request(`${this.apiUrl}/board/${this.id}`);
    board$.subscribe((res : ResponseModel) => {
      if(res.success == true){
        this.board = res.data;
        console.log(this.board, this.board.title, this.board.content);
      }
    });

  }

}

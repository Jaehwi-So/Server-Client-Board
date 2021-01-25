import { Component, OnInit } from '@angular/core';
import { HOST } from '@angular/core/src/render3/interfaces/view';
import { Router } from '@angular/router';
import PageModel from 'src/app/models/PageModel';
import ResponseModel from 'src/app/models/ResponseModel';
import { ApiService } from 'src/app/service/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {
  private apiUrl : string = environment.apiHost;
  private boards;
  private pager : PageModel;

  constructor(private apiService : ApiService, private router : Router) { 

  }
  ngOnInit() {
    this.pager = {
      pageSize: 3,
      maxSize: 3,
      page: 0
    } as PageModel
    this.getList(this.pager.page);

    //this.pagingList(pager);
  }
  getList(curPage : Number){
    const boards$ = this.apiService.get_api_request(`${this.apiUrl}/board?page=${curPage}&pageSize=${this.pager.pageSize}&maxSize=${this.pager.maxSize}`);
    boards$.subscribe((res : ResponseModel) => {
      if(res.success = true){
        this.boards = res.data.list;
        this.pager = res.data.pager;   
      }
    });
  }

  detail_view(id : number){
    this.router.navigateByUrl(`/board/${id}`);
  }
  pageChanged(page : number){
    this.pager.page = page;
    this.getList(page);
  }
}

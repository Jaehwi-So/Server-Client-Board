import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { HOST } from '@angular/core/src/render3/interfaces/view';
import { ActivatedRoute, Router } from '@angular/router';
import { BoardModel } from 'src/app/models/BoardModel';
import PageModel from 'src/app/models/PageModel';
import ResponseModel from 'src/app/models/ResponseModel';
import { ApiService } from 'src/app/service/api.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit{
  apiUrl : string = environment.apiHost;
  boards : BoardModel[];
  pager : PageModel;
  prefix : number = 6;

  constructor(private route : ActivatedRoute, private apiService : ApiService, private router : Router) { 

  }
  ngOnInit() {
    this.pager = {
      pageSize: 12,
      maxSize: 2,
    } as PageModel
    this.getList(Number(this.route.snapshot.queryParamMap.get('page')) || 0);
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
    this.router.navigateByUrl(`/board/${id}?page=${this.pager.page}`);
  }
  pageChanged(page : number){
    this.pager.page = page;
    this.getList(page);
  }

  loadImg(id : number) {
    if(id == null || id == undefined){
      return 'assets/img/lazyImage.jpg';
    }
    return `${this.apiUrl}/resource/image?id=${id}`;
  }
}

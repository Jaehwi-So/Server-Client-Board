import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from './service/api.service';
import { PageService } from './service/page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'board-client';
  token: string;

  constructor(private apiService : ApiService, private pageService: PageService){
    
  }

  ngOnInit(): void {

  }

  onTokenChangeListener() {
    const token = this.apiService.getLoginToken();
    if (!token && this.apiService.isLoginTokenExpired(token)) {
      console.log('force move to login.');
      this.pageService.moveTo('login');
    } 
  }
}
 
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  result : string;

  constructor(private apiService : ApiService) { 
  }

  //비동기 Asnyc/Await으로 api에 요청
   /*
  async ngOnInit() {
    let result = null;
    try{
      result = await this.apiService.get_api_promise(this.apiUrl);  //Promise
    }
    catch(e){
      console.error("API Request fail");
    }
    if(result){
      this.users = result;
    }
  }
  */

  //Rxjs의 Observable을 통해 가져오는 방법
  ngOnInit(){
    const users$ = this.apiService.get_api_observable(`http://localhost:8080/board`);  //Observable의 변수는 뒤에 $를 붙인다.
    users$.subscribe(data => {
      this.result = data.result;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  resultPromise : string;
  resultObservable : string

  constructor(private apiService : ApiService) { 
  }

  //비동기 Asnyc/Await으로 api에 요청
  async ngOnInit(){
    
    /*
    let data = null;
    try{
      data = await this.apiService.get_api_promise<TestModel>(`http://localhost:8080/board`);  //Observable의 변수는 뒤에 $를 붙인다.
    }
    catch(e){
      console.error("API Request fail");
    }
    if(data){
      this.resultPromise = data.result;
    }
    */
    

    
    this.apiService.get_api_request<TestModel>(`http://localhost:8080/board`).subscribe((data) => {
      this.resultObservable = data.result;
    });
    


  }
}

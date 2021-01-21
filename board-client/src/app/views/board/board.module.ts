import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardDetailComponent } from './board-detail/board-detail.component';
import { BoardListComponent } from './board-list/board-list.component';
import { BoardInsertFormComponent } from './board-insert-form/board-insert-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BoardComponent } from './board.component';

@NgModule({
  declarations: [
    BoardComponent,
    BoardDetailComponent,
    BoardListComponent,
    BoardInsertFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule, //루트 모듈이 아니므로 CommonModule을 import해준다.
  ],
  exports: [
    BoardComponent,
    BoardDetailComponent,
    BoardListComponent,
    BoardInsertFormComponent
  ]
})
export class BoardModule { }

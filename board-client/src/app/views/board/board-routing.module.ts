import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardDetailComponent } from './board-detail/board-detail.component';
import { BoardInsertFormComponent } from './board-insert-form/board-insert-form.component';
import { BoardListComponent } from './board-list/board-list.component';
import { BoardComponent } from './board.component';

const routes: Routes = [
  {
    path : 'board', component: BoardComponent,
    children:[
      {path : '', component: BoardListComponent},
      {path : 'list', component: BoardListComponent},
      {path : 'insert', component: BoardInsertFormComponent},
      {path : ':id', component: BoardDetailComponent},
    ]

  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardRoutingModule { }




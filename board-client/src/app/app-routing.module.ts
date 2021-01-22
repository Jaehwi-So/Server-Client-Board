import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './views/board/board.component';
import { MainComponent } from './views/main/main.component';

const routes: Routes = [
  {path : '', component: MainComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

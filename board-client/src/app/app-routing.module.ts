import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './views/account/account.component';
import { BoardComponent } from './views/board/board.component';
import { LoginComponent } from './views/login/login.component';
import { MainComponent } from './views/main/main.component';
import {  AuthGuard  } from  './auth/auth.guard';

const routes: Routes = [
  {path : '', component: MainComponent},  
  {path : 'account', component: AccountComponent },  
  {path : 'login', component: LoginComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from  './users/users.component'

const appRoutes:Routes =[
   
  { path : 'users' ,  component:UsersComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  
  ],
  exports:[RouterModule]

  
})
export class AppRoutingModule { }

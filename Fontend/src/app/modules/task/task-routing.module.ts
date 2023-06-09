import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task.component';
import { UserComponent } from '../user/user.component';
import { UserloginComponent } from '../user/pages/userlogin/userlogin.component';
import { AddtaskComponent } from './pages/addtask/addtask.component';
import { MaintaskComponent } from './pages/maintask/maintask.component';
import { TaskhistoryComponent } from './pages/taskhistory/taskhistory.component';
import { PendingtaskComponent } from './pages/pendingtask/pendingtask.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
  
    path: 'task', component:TaskComponent, canActivate:[AuthGuard] ,  children: [

      { path: '', redirectTo: 'task', pathMatch: 'full' },
      {path:'', redirectTo:'maintask',pathMatch:'full'},
      {path:'maintask',component:MaintaskComponent},
      {path: 'addtask',component:AddtaskComponent},
      {path:'taskhistory',component:TaskhistoryComponent},
      {path:'pendingtask',component:PendingtaskComponent},
      
      // {path:'**',redirectTo:'task/dashboard/home'}

    ]
  },
  {path:'**',redirectTo:'task/dashboard/home'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }

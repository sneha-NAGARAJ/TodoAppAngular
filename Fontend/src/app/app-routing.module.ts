import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/user/pages/home/home.component';

const routes: Routes = [
{path:'',redirectTo:'user',pathMatch:'full'},
 
{ path: 'task', loadChildren: () => import('./modules/task/task.module').then(m => m.TaskModule) },
{ path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

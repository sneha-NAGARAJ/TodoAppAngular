import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserloginComponent } from './pages/userlogin/userlogin.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
{ path: '',redirectTo:'dashboard',pathMatch:'full' },
{ 
  path:'dashboard',component:UserComponent,children:[
  {path:'',component: HomeComponent},
  {path:'signup',component: SignupComponent},
  {path:'userlogin',component: UserloginComponent}
]
},
{path:'**',redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserloginComponent } from './pages/userlogin/userlogin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { MaterialsModule } from '../materials/materials.module';
import { HttpClientModule } from '@angular/common/http';
import { AsyncEmailValidator } from 'src/app/validators/email.validators';



  @NgModule({
    declarations: [
      UserComponent,
      UserloginComponent,
      SignupComponent,
      HomeComponent,
      AsyncEmailValidator
  

    ],
    imports: [
      CommonModule,
      UserRoutingModule,
      FormsModule,
      MaterialsModule,
      HttpClientModule
      

    ]
  })
  export class UserModule { }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { baseUserUrl } from 'environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {
  postTask(formlogin: NgForm) {
    throw new Error('Method not implemented.');
  }
  userLogin(formData: any) {
    throw new Error('Method not implemented.');
  }

   
  constructor(private http: HttpClient) { }

  login(formData: any): Observable<any> {
    console.log(formData)
    return this.http.post(baseUserUrl + 'login', formData)
  }
}

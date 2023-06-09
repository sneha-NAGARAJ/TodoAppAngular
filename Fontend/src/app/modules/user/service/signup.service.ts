import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { baseUserUrl } from 'environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  login(formlogin: NgForm) {
    throw new Error('Method not implemented.');
  }
  // SignupService(uploadedData: FormData) {
    // throw new Error('Method not implemented.');
  // }
  constructor(private http: HttpClient) { }

  postTask(formData: any): Observable<any> {
    return this.http.post(baseUserUrl + 'signup', formData)
  }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseTaskUrl, baseUserUrl } from 'environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  fetchTasks(userid: any, arg1: string) {

  }
  submitedFrm(uploadedData: FormData) {
   
  }

  constructor(private http: HttpClient) { }
  submited(addtaskData: any): Observable<any> {
    return this.http.post(baseTaskUrl + 'add', addtaskData)
  }


  fetchPendingTasks(userId: number, status: string): Observable<any> {
    const user = userId
    const params = new HttpParams().set('user', user)
    return this.http.get(baseTaskUrl + 'list/' + status, { params })
  }


  removeTask(id: number): Observable<any> {
    return this.http.delete(baseTaskUrl + 'remove/' + id)
  }

  
  searchTask(user: number, searchText: string): Observable<any> {
    console.log(searchText, user,'*****')
    const params = new HttpParams().set('user', user).set('query', searchText)
    return this.http.get(baseTaskUrl + 'search', { params })

  }


  updateTask(taskId: number, formData: any): Observable<any> {
    return this.http.put(baseTaskUrl + 'update/' + taskId, formData)
  }


  userSignup(formData: any): Observable<any>{
    return this.http.post(baseUserUrl + 'signup', formData)
  }

  checkEmail(email: string): Observable<any>{
   
    const params = new HttpParams().set('email', email)
    return this.http.get(baseUserUrl + 'email/check', { params })  
  }


  modalfuction(taskId: number, formData: any): Observable<any> {
    return this.http.put(baseTaskUrl + 'update/' + taskId, formData)
  }

}
  



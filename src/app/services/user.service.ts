import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  

  getList(): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("token") });
    let options = { headers: headers };
    return this.http.post<any>('http://192.168.1.23:8000/api/users_list',null,options);
  }

  getByID(id:any): Observable<any>{
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("token") });
    let options = { headers: headers };
    return this.http.post<any>('http://192.168.1.23:8000/api/users/'+id,null,options);
  }

  delete(id:number): Observable<any>{
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("token") });
    let options = { headers: headers };
    return this.http.post<any>('http://192.168.1.23:8000/api/users_delete/'+id,null,options);
  }

  add(data:any): Observable<any>{
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("token") });
    let options = { headers: headers };
    return this.http.post<any>('http://192.168.1.23:8000/api/users/',data,options);
  }

  update(id:any, data:any): Observable<any>{
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("token") });
    let options = { headers: headers };
    return this.http.post<any>('http://192.168.1.23:8000/api/users_edit/'+id,data,options);
  }

  login(data:any): Observable<any>{
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("token") });
    let options = { headers: headers };
    return this.http.post<any>('http://192.168.1.23:8000/api/login/',data,options);
  }

  logout(): Observable<any>{
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("token") });
    let options = { headers: headers };
    return this.http.post<any>('http://192.168.1.23:8000/api/logout/',null, options);
  }

  checkExp(): Observable<any>{
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("token") });
    let options = { headers: headers };
    return this.http.post<any>('http://192.168.1.23:8000/api/test/',null, options);
  }
}

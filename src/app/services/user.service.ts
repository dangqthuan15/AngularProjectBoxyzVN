import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  getList(): Observable<any> {
    return this.http.post<any>('http://192.168.1.23:8000/api/users_list',{title:'Call API get list Users'});
  }

  getByID(id:any): Observable<any>{
    return this.http.post<any>('http://192.168.1.23:8000/api/users/'+id,{title:'Call API getByID User'});
  }

  delete(id:number): Observable<any>{
    return this.http.post<any>('http://192.168.1.23:8000/api/users_delete/'+id,{title:'Call API delete User'});
  }

  add(data:any): Observable<any>{
    return this.http.post<any>('http://192.168.1.23:8000/api/users/',data);
  }

  update(id:any, data:any): Observable<any>{
    return this.http.post<any>('http://192.168.1.23:8000/api/users_edit/'+id,data);
  }
}

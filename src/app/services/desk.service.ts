import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeskService {

  constructor(private http: HttpClient) { }

  getList(): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/table_list',{title:'Call API get list Table'});
  }

  getByID(id:any): Observable<any>{
    return this.http.post<any>('http://127.0.0.1:8000/api/table/'+id,{title:'Call API getByID Table'});
  }

  delete(id:number): Observable<any>{
    return this.http.post<any>('http://127.0.0.1:8000/api/table_delete/'+id,{title:'Call API delete Table'});
  }

  add(data:any): Observable<any>{
    return this.http.post<any>('http://127.0.0.1:8000/api/table/',data);
  }

  update(id:any, data:any): Observable<any>{
    return this.http.post<any>('http://127.0.0.1:8000/api/table_edit/'+id,data);
  }
}

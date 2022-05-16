import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeskService {

  constructor(private http: HttpClient) { }

  getList(): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:8000/api/table/');
  }

  getByID(id:any): Observable<any>{
    console.log(id);
    
    return this.http.get<any>('http://127.0.0.1:8000/api/table/'+id);
  }

  delete(id:number): Observable<any>{
    return this.http.delete<any>('http://127.0.0.1:8000/api/table/'+id);
  }

  add(data:any): Observable<any>{
    return this.http.post<any>('http://127.0.0.1:8000/api/table/',data);
  }

  update(id:any, data:any): Observable<any>{
    return this.http.put<any>('http://127.0.0.1:8000/api/table/'+id,data);
  }
}

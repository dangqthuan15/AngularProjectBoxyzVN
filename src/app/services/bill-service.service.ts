import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillServiceService {

  constructor(private http:HttpClient) { }

  getList(): Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/bill');
  }

  getByID(id:any): Observable<any>{
    console.log(id);

    return this.http.get<any>('http://127.0.0.1:8000/api/bill/'+id);
  }

  delete(id:number): Observable<any>{
    return this.http.delete<any>('http://127.0.0.1:8000/api/bill/'+id);
  }

  add(data:any): Observable<any>{
    return this.http.post<any>('http://127.0.0.1:8000/api/bill',data);
  }

  update(id:any, data:any): Observable<any>{
    return this.http.put<any>('http://127.0.0.1:8000/api/bill/'+id,data);
  }
}

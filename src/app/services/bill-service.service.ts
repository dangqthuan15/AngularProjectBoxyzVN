import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillServiceService {

  constructor(private http:HttpClient) { }

  getList(): Observable<any> {
    return this.http.post<any>('http://192.168.1.23:8000/api/bill_list',{title:'Call API get list Bill'});
  }

  getByID(id:any): Observable<any>{
    return this.http.post<any>('http://192.168.1.23:8000/api/bill/'+id,{title:'Call API getByID Bill'});
  }

  delete(id:number): Observable<any>{
    return this.http.post<any>('http://192.168.1.23:8000/api/bill_delete/'+id,{title:'Call API delete Bill'});
  }

  add(data:any): Observable<any>{
    return this.http.post<any>('http://192.168.1.23:8000/api/bill/',data);
  }

  update(id:any, data:any): Observable<any>{
    return this.http.post<any>('http://192.168.1.23:8000/api/bill_edit/'+id,data);
  }

  getbilldetail(id:any):Observable<any>{
    return this.http.post<any>('http://192.168.1.23:8000/api/bill_detail/'+id,{title:'Call API getByID Detail Bill'});
  }

}

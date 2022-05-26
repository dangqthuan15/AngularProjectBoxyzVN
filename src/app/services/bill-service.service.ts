import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillServiceService {

  constructor(private http:HttpClient) { }

  getList(): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("token") });
    let options = { headers: headers };
    return this.http.post<any>('http://192.168.1.23:8000/api/bill_list',null, options);
  }

  getByID(id:any): Observable<any>{
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("token") });
    let options = { headers: headers };
    return this.http.post<any>('http://192.168.1.23:8000/api/bill/'+id,null, options);
  }

  delete(id:number): Observable<any>{
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("token") });
    let options = { headers: headers };
    return this.http.post<any>('http://192.168.1.23:8000/api/bill_delete/'+id,null, options);
  }

  add(data:any): Observable<any>{
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("token") });
    let options = { headers: headers };
    return this.http.post<any>('http://192.168.1.23:8000/api/bill/',data,options);
  }

  update(id:any, data:any): Observable<any>{
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("token") });
    let options = { headers: headers };
    return this.http.post<any>('http://192.168.1.23:8000/api/bill_edit/'+id,data,options);
  }

  getbilldetail(id:any):Observable<any>{
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("token") });
    let options = { headers: headers };
    return this.http.post<any>('http://192.168.1.23:8000/api/bill_detail/'+id,null, options);
  }

}

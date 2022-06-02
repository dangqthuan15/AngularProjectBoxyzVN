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

  getByID(data:any): Observable<any>{
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("token") });
    let options = { headers: headers };
    return this.http.post<any>('http://192.168.1.23:8000/api/bill_id/',data, options);
  }

  delete(data:any): Observable<any>{
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("token") });
    let options = { headers: headers };
    return this.http.post<any>('http://192.168.1.23:8000/api/bill_delete/',data, options);
  }

  add(data:any): Observable<any>{
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("token") });
    let options = { headers: headers };
    return this.http.post<any>('http://192.168.1.23:8000/api/bill/',data,options);
  }

  update(data:any): Observable<any>{
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("token") });
    let options = { headers: headers };
    return this.http.post<any>('http://192.168.1.23:8000/api/bill_edit/',data,options);
  }

  getbilldetail(data:any):Observable<any>{
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("token") });
    let options = { headers: headers };
    return this.http.post<any>('http://192.168.1.23:8000/api/bill_detail/',data, options);
  }

}

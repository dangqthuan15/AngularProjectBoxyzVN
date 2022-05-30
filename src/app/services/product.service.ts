import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getList(): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("token") });
    let options = { headers: headers };
    return this.http.post<any>('http://192.168.1.23:8000/api/products_list',null, options);
  }

  getByID(id:any): Observable<any>{
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("token") });
    let options = { headers: headers };
    return this.http.post<any>('http://192.168.1.23:8000/api/products/'+id,null, options);
  }

  delete(id:number): Observable<any>{
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("token") });
    let options = { headers: headers };
    return this.http.post<any>('http://192.168.1.23:8000/api/products_delete/'+id,null, options);
  }

  add(data:any): Observable<any>{
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("token") });
    let options = { headers: headers };
    return this.http.post<any>('http://192.168.1.23:8000/api/products/',data,options);
  }

  update(id:any, data:any): Observable<any>{
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("token") });
    let options = { headers: headers };
    return this.http.post<any>('http://192.168.1.23:8000/api/products_edit/'+id,data,options);
  }
}

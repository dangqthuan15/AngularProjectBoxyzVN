import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getList(): Observable<any> {
    return this.http.post<any>('http://192.168.1.23:8000/api/products_list',{title:'Call API get list Products'});
  }

  getByID(id:any): Observable<any>{
    return this.http.post<any>('http://192.168.1.23:8000/api/products/'+id,{title:'Call API getByID Products'});
  }

  delete(id:number): Observable<any>{
    return this.http.post<any>('http://192.168.1.23:8000/api/products_delete/'+id,{title:'Call API delete Products'});
  }

  add(data:any): Observable<any>{
    return this.http.post<any>('http://192.168.1.23:8000/api/products/',data);
  }

  update(id:any, data:any): Observable<any>{
    return this.http.post<any>('http://192.168.1.23:8000/api/products_edit/'+id,data);
  }
}

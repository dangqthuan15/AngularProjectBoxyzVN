import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

   // cac phuong thuc api
  getlist():Observable<any>{
    return this.http.get<any>('http://127.0.0.1:8000/api/products');
  }

  apcdelete(id:number):Observable<any>{
    return this.http.delete<any>('http://127.0.0.1:8000/api/products/'+id);
  }

  getByIDproduct(id:any): Observable<any>{
    console.log(id);
    return this.http.get<any>('http://127.0.0.1:8000/api/products/'+id);
  }

  apcadd(data:any):Observable<any>{
    return this.http.post<any>('http://127.0.0.1:8000/api/products/',data);
  }

  update(id:any, data:any): Observable<any>{
    return this.http.put<any>('http://127.0.0.1:8000/api/products/'+id,data);
  }


}

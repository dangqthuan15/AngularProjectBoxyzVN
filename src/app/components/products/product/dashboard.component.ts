import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  title="PRODUCT MANAGER";
  products:any;

  constructor(private productSrv:ProductService, private productsRouter:Router) {}

  callProducts(){

    this.productSrv.getList().subscribe(res=>{
      this.products=res;})

  }

  ngOnInit(): void {
    if(localStorage.getItem("token") == null){
      this.productsRouter.navigate(['']);
    }
    this.callProducts();
  }




  DeleteProducts(id:number){

    this.productSrv.delete(id).subscribe(res=>{this.callProducts();})

  }

  ngDestroy(){

  }

}

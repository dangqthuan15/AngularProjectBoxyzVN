import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  title="PRODUCT MANAGER";
  products:any;

  constructor(private productSrv:ProductService) {}

  callProducts(){

    this.productSrv.getlist().subscribe(res=>{
      this.products=res;
      console.log(this.products);})

  }

  ngOnInit(): void {
    this.callProducts();
  }




  DeleteProducts(id:number){

    this.productSrv.apcdelete(id).subscribe(res=>{this.callProducts(); console.log(res);})

  }

  ngDestroy(){

  }

}

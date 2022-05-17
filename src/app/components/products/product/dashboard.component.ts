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
  
  title="Information Producst";
  products:any;

  constructor(private productSrv:ProductService) {}


  ngOnInit(): void {
    this.productSrv.getlist().subscribe(res=>{
      this.products=res;
      console.log(this.products);})
  }

  
  
  EditProducts(id:number){

    alert('Clicked on button Edit '+id)

  }

  DeleteProducts(id:number){

    alert('Clicked on button Delete '+id)

  }

  ngDestroy(){

  }

}

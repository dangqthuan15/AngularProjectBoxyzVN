import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

  productAdd=this.fbproduct.group({
    name:   ['',Validators.required],
    price:  ['',Validators.required],
    isAvailable: ['',Validators.required],
    imgUrl: ['',Validators.required],
  });

  constructor(private productSrv:ProductService,
              private fbproduct:FormBuilder,
              private routerProduct:Router) { }

  submited: boolean = false;
  ngOnInit(): void {
  }

get f(){return this.productAdd.controls;}

onSubmit():any{

  this.submited=true;
  if(this.productAdd.invalid){return false;}

  this.productSrv.add(this.productAdd.value).subscribe(res=>{this.routerProduct.navigate(['product'])});
}

}

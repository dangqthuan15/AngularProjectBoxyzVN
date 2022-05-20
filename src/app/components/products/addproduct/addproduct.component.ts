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

  title="Add Producst Information";

  productAdd=this.fbproduct.group({
    name:   ['',Validators.required],
    price:  ['',Validators.required],
    isAvailable: ['',Validators.required],
    imgurl: ['',Validators.required],
  });

  constructor(private productSrv:ProductService,
              private fbproduct:FormBuilder,
              private routerProduct:Router) { }

  submited: boolean = false;
  ngOnInit(): void {
  }

get f(){return this.productAdd.controls;}

onSubmit():any{
  //alert('Clicked on submit');
  this.submited=true;
  if(this.productAdd.invalid){return false;}
  // them moi
  console.log(this.productAdd.value);
  this.productSrv.apcadd(this.productAdd.value).subscribe(res=>{this.routerProduct.navigate(['product'])});
}

}

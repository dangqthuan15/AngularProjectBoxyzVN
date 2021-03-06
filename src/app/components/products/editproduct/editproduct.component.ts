import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.scss']
})
export class EditproductComponent implements OnInit {

  title="Edit Producst Information";
  id:any;

  productAdd=this.fbproduct.group({
    name:   ['',Validators.required],
    price:  ['',Validators.required],
    isAvailable: ['',Validators.required],
    imgUrl: ['',Validators.required],
  });

  constructor(private productSrv:ProductService,
              private fbproduct:FormBuilder,
              private routerProduct:Router,
              private routerGet:ActivatedRoute) { }

  submited: boolean = false;
  ngOnInit(): void {
    this.routerGet.paramMap.subscribe(query=>{
      this.id = query.get("id");
      //console.log(query.get("id"));
      this.productSrv.getByID({id_request: this.id}).subscribe(res=>{
        let productFrom = res;
        this.productAdd=this.fbproduct.group({
          name:   [productFrom.name,Validators.required],
          price:  [productFrom.price,Validators.required],
          isAvailable: [productFrom.isAvailable,Validators.required],
          imgUrl: [productFrom.imgUrl,Validators.required],
          id_request: [this.id],
        });
      });
    })
  }

get f(){return this.productAdd.controls;}

onSubmit():any{
  //alert('Clicked on submit');
  this.submited=true;
  if(this.productAdd.invalid){return false;}
  // them moi
  console.log(this.productAdd.value);
  this.productSrv.update(this.productAdd.value).subscribe(res=>{this.routerProduct.navigate(['product'])});

}


}

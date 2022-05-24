import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BillServiceService } from 'src/app/services/bill-service.service'; 
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-billdetail',
  templateUrl: './billdetail.component.html',
  styleUrls: ['./billdetail.component.scss']
})

export class BilldetailComponent implements OnInit {

  id:any;
  infodetailbill:any;
  products_detail:any;
  productsArray:any[] = [];
  total=0;


  constructor(private detail_bill:BillServiceService,
              private router:ActivatedRoute,
              private productsSrv:ProductService,) {
       
   }

   getAllBill(){
    this.detail_bill.getList().subscribe((res:any) => {
    this.infodetailbill = res;
    })
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe(query=>{
      this.id=query.get("id");
      this.detail_bill.getbilldetail(this.id).subscribe(res=>{
        this.infodetailbill=res;
        for (let index = 0; index < res.length; index++) {
          const element = res[index];
          this.total+= element.total;
        }
    })})
  }

  

}

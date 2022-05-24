import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BillServiceService } from 'src/app/services/bill-service.service'; 


// export class Detail_bill{
//     constructor(
//         public id:number,
//         public products_id:number,
//         public bill_id:number,
//         public quantity:number,
//         public total:number
//     )
//     {

//     }
// }


@Component({
  selector: 'app-billdetail',
  templateUrl: './billdetail.component.html',
  styleUrls: ['./billdetail.component.scss']
})

export class BilldetailComponent implements OnInit {

  id:any;
  infodetailbill:any;

  constructor(private detail_bill:BillServiceService,private router:ActivatedRoute) {
       
   }

   getAllBill(){
    this.detail_bill.getList().subscribe((res:any) => {
    this.infodetailbill = res;
    })
  }

  ngOnInit(): void {
    //this.detail_bill.getbilldetail(this.id).subscribe(data=>{console.log(data)});
    this.router.paramMap.subscribe(query=>{
      this.id=query.get("id");
      this.detail_bill.getbilldetail(this.id).subscribe(res=>{console.log(res);this.infodetailbill=res;
    })})
  }

  onDelete(id:number){
    this.detail_bill.delete(id).subscribe((res:any)=>{
      this.getAllBill();
    })
  }

}

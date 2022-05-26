import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BillServiceService } from 'src/app/services/bill-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  bill:any;

  constructor(private billSrv:BillServiceService,
              private billRouter:Router) { }

  getAllBill(){
    this.billSrv.getList().subscribe((res:any) => {
    this.bill = res;
    })
  }

  ngOnInit(): void {
    if(localStorage.getItem("token") == null){
      this.billRouter.navigate(['']);
    }
    this.getAllBill();
  }
  onDelete(id:number){
    this.billSrv.delete(id).subscribe((res:any)=>{
      this.getAllBill();
    })
  }

}

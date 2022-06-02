import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BillServiceService } from 'src/app/services/bill-service.service';
import decode from 'jwt-decode';

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
    const token:any = localStorage.getItem("token");
    const tokenPayload:any = decode(token);
    if(tokenPayload.roles == 'admin'){
    this.billSrv.delete({id_request: id}).subscribe((res:any)=>{
      this.getAllBill();
    })} else {
      alert('For ADMIN permissions only!');
    }
  }

}

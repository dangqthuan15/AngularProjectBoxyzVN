import { Component, OnInit } from '@angular/core';
import { BillServiceService } from 'src/app/services/bill-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  bill:any;

  constructor(private billSrv:BillServiceService) { }

  getAllBill(){
    this.billSrv.getList().subscribe((res:any) => {
    this.billSrv = res;
    })
  }

  ngOnInit(): void {
    this.getAllBill();
  }
  onDelete(id:number){
    this.billSrv.delete(id).subscribe((res:any)=>{
      this.getAllBill();
    })
  }

}

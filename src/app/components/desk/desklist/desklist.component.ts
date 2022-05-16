import { Component, OnInit } from '@angular/core';
import { DeskService } from 'src/app/services/desk.service';

@Component({
  selector: 'app-desklist',
  templateUrl: './desklist.component.html',
  styleUrls: ['./desklist.component.scss']
})
export class DesklistComponent implements OnInit {

  tables:any;
  constructor(private tableSrv:DeskService) { }

  getAllDesk(){
    this.tableSrv.getList().subscribe((res:any)=>{
      this.tables = res;
    })
  }

  ngOnInit(): void {
    this.getAllDesk();
  }

  onDelete(id:number){
    this.tableSrv.delete(id).subscribe((res:any)=>{
      this.getAllDesk();
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeskService } from 'src/app/services/desk.service';

@Component({
  selector: 'app-desklist',
  templateUrl: './desklist.component.html',
  styleUrls: ['./desklist.component.scss']
})
export class DesklistComponent implements OnInit {

  tables:any;
  constructor(private tableSrv:DeskService, private tableRouter:Router) { }

  getAllDesk(){
    this.tableSrv.getList().subscribe((res:any)=>{
      for (let index = 0; index < res.length; index++) {
        const element = res[index];
        if(element.status == 0){
          element.status = 'Unavailable';
        } else {element.status = 'Available';}
      }
      this.tables = res;
    })
  }

  ngOnInit(): void {
    if(localStorage.getItem("token") == null){
      this.tableRouter.navigate(['']);
    }
    this.getAllDesk();
  }

  onDelete(id:number){
    this.tableSrv.delete({id_request: id}).subscribe((res:any)=>{
      this.getAllDesk();
    })
  }

}

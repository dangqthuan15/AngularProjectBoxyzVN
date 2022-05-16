import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users:any;

  constructor(private userSrv:UserService) { }

  getAllUser(){
    this.userSrv.getList().subscribe((res:any) => {
    this.users = res;
    })
  }

  ngOnInit(): void {
    this.getAllUser();
  }

  onDelete(id:number){
    this.userSrv.delete(id).subscribe((res:any)=>{
      this.getAllUser();
    })
  }

}

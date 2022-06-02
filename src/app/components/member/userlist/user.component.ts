import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import decode from 'jwt-decode';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users:any;

  constructor(private userSrv:UserService, private userRouter:Router) { }

  getAllUser(){
    this.userSrv.getList().subscribe((res:any) => {
    this.users = res;
    })
  }

  ngOnInit(): void {
    if(localStorage.getItem("token") == null){
      this.userRouter.navigate(['']);
    }
    this.getAllUser();
  }

  onDelete(id:number){
    const token:any = localStorage.getItem("token");
    const tokenPayload:any = decode(token);
    if(tokenPayload.roles == 'admin'){
    this.userSrv.delete({id_request: id}).subscribe((res:any)=>{
      this.getAllUser();
    })} else {
      alert('For ADMIN permissions only!');
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signIn=this.fbuser.group({
    username:   ['',Validators.required],
    password:  ['',Validators.required],
  });

  constructor(private usersSrv:UserService,
              private fbuser:FormBuilder,
              private loginRouter:Router) { }
  ngOnInit(): void {
    if(localStorage.getItem("token") != null){
      this.loginRouter.navigate(['logout']);
    }
  }

  onSubmit():any{
  
    this.usersSrv.login(this.signIn.value).subscribe(res=>{
      console.log(res.message)
        if(res.message == 'Success'){
          this.loginRouter.navigate(['logout']);
          localStorage.setItem("token", res.token);
          localStorage.setItem("name", res.user.full_name);
          localStorage.setItem("email", res.user.email);
        } else {
          this.loginRouter.navigate(['']);
        }
    });
  }

}

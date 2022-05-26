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
  }

  onSubmit():any{
  
    this.usersSrv.login(this.signIn.value).subscribe(res=>{
      console.log(res.message)
        if(res.message == 'Success'){
          this.loginRouter.navigate(['product']);
          localStorage.setItem("token", res.token);
        } else {
          this.loginRouter.navigate(['']);
        }
    });
  }

}

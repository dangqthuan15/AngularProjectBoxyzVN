import { Component, OnInit } from '@angular/core';
import { FormBuilder, RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-addnewmember',
  templateUrl: './addnewmember.component.html',
  styleUrls: ['./addnewmember.component.scss']
})
export class AddnewmemberComponent implements OnInit {

  submited: boolean = false;

  userForm = this.formBuilder.group({
    full_name:['',Validators.required],
    username:['',Validators.required],
    password:['',Validators.required],
    email:['',Validators.required],
    DOB : ['',Validators.required]
  });

  constructor(private userSrv:UserService, private formBuilder:FormBuilder, public router:Router) { }

  ngOnInit(): void {
  }

  get f(){return this.userForm.controls;}
  onSubmit():any{
    this.submited = true;

    if(this.userForm.invalid){return false;}

    this.userSrv.add(this.userForm.value).subscribe(res=>{
      this.router.navigate(['users'])
    })
  }

}

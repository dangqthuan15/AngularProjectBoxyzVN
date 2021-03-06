import { Component, OnInit } from '@angular/core';
import { FormBuilder, RequiredValidator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-editmember',
  templateUrl: './editmember.component.html',
  styleUrls: ['./editmember.component.scss']
})
export class EditmemberComponent implements OnInit {

  submited: boolean = false;
  id:any;

  userForm = this.formBuilder.group({
    full_name:['',Validators.required],
    username:['',Validators.required],
    email:['',Validators.required],
    DOB : ['',Validators.required]
  });

  constructor(
    private userSrv:UserService,
    private formBuilder:FormBuilder,
    public router:Router,
    private actRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.actRouter.paramMap.subscribe(query=>{
      this.id= query.get("id");
      this.userSrv.getByID({id_request: this.id}).subscribe(res => {
      let userProfile = res;
      this.userForm = this.formBuilder.group({
        full_name:[userProfile.full_name,Validators.required],
        username:[userProfile.username,Validators.required],
        email:[userProfile.email,Validators.required],
        DOB : [userProfile.DOB,Validators.required],
        id_request: [this.id]
      });
      })
    })
  }

  get f(){return this.userForm.controls;}
  onSubmit():any{
    this.submited = true;

    if(this.userForm.invalid){return false;}

    console.log(this.userForm.value);
    this.userSrv.update(this.userForm.value).subscribe(res=>{
      this.router.navigate(['users'])
    })
  }

}

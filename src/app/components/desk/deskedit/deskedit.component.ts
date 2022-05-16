import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DeskService } from 'src/app/services/desk.service';

@Component({
  selector: 'app-deskedit',
  templateUrl: './deskedit.component.html',
  styleUrls: ['./deskedit.component.scss']
})
export class DeskeditComponent implements OnInit {

  submited: boolean = false;
  id:any;

  deskForm = this.formBuilder.group({
    serial_tagcast_id:['',Validators.required],
    status:['',Validators.required],
  });

  constructor(
    private tableSrv:DeskService,
    private formBuilder:FormBuilder, 
    public router:Router,
    private actRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.actRouter.paramMap.subscribe(query=>{
      this.id= query.get("id");
      this.tableSrv.getByID(this.id).subscribe(res => {
      let tableProfile = res;      
      this.deskForm = this.formBuilder.group({
        serial_tagcast_id:[tableProfile.serial_tagcast_id,Validators.required],
        status:[tableProfile.status,Validators.required],
      });
      })
    })
  }

  get f(){return this.deskForm.controls;}
  onSubmit():any{
    this.submited = true;

    if(this.deskForm.invalid){return false;}

    this.tableSrv.update(this.id ,this.deskForm.value).subscribe(res=>{
      this.router.navigate(['desk'])
    })
  }

}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DeskService } from 'src/app/services/desk.service';

@Component({
  selector: 'app-deskadd',
  templateUrl: './deskadd.component.html',
  styleUrls: ['./deskadd.component.scss']
})
export class DeskaddComponent implements OnInit {

  submited: boolean = false;

  deskForm = this.formBuilder.group({
    serial_tagcast_id:['',Validators.required],
    status:['',Validators.required],
  });

  constructor(private tableSrv:DeskService, private formBuilder:FormBuilder, public router:Router) { }

  ngOnInit(): void {
  }

  get f(){return this.deskForm.controls;}
  onSubmit():any{
    this.submited = true;

    if(this.deskForm.invalid){return false;}

    this.tableSrv.add(this.deskForm.value).subscribe(res=>{
      this.router.navigate(['desk'])
    })
  }

}

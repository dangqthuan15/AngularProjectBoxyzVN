import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BillServiceService } from 'src/app/services/bill-service.service';

@Component({
  selector: 'app-addbill',
  templateUrl: './addbill.component.html',
  styleUrls: ['./addbill.component.scss']
})
export class AddbillComponent implements OnInit {

  submited: boolean = false;
  id:any;

  billForm= this.formbuilder.group({
    order_id:['',Validators.required],
    desk_id:['',Validators.required],
    user_id:['',Validators.required],
    time_in:['',Validators.required],
    time_out:['',Validators.required]
  });

  constructor(
    private billSrv:BillServiceService,
    private formbuilder:FormBuilder,
    public router:Router,
    private actRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  get f(){return this.billForm.controls;}
  onSubmit():any{
    this.submited = true;

    if(this.billForm.invalid){return false;}

    this.billSrv.add(this.billForm.value).subscribe(res=>{
      this.router.navigate(['bill'])
    })
  }

}

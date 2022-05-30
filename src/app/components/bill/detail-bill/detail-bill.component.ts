import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BillServiceService } from 'src/app/services/bill-service.service';

@Component({
  selector: 'app-detail-bill',
  templateUrl: './detail-bill.component.html',
  styleUrls: ['./detail-bill.component.scss']
})
export class DetailBillComponent implements OnInit {

  submited: boolean = false;
  id:any;

  billForm= this.formbuilder.group({
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
    this.actRoute.paramMap.subscribe(query=>{
      this.id= query.get("id");
      this.billSrv.getByID(this.id).subscribe(res => {
      let billProfile = res;
      this.billForm = this.formbuilder.group({
        desk_id:[billProfile.desk_id,Validators.required],
        user_id:[billProfile.user_id,Validators.required],
        time_in:[billProfile.time_in,Validators.required],
        time_out:[billProfile.time_out,Validators.required]
      });
      })
    })
  }
  get b(){return this.billForm.controls;}
  onSubmit():any{
    this.submited = true;

    if(this.billForm.invalid){return false;}

    this.billSrv.update(this.id ,this.billForm.value).subscribe(res=>{
      this.router.navigate(['bill'])
    })
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes,CanActivate } from '@angular/router';
import { DashboardComponent } from './components/products/product/dashboard.component';
import { TableComponent } from './components/bill/bill-list/table.component';
import { DetailBillComponent } from './components/bill/detail-bill/detail-bill.component';
import { UserComponent } from './components/member/userlist/user.component';
import { AddnewmemberComponent } from './components/member/addnewmember/addnewmember.component';
import { EditmemberComponent } from './components/member/editmember/editmember.component';
import { DesklistComponent } from './components/desk/desklist/desklist.component';
import { DeskaddComponent } from './components/desk/deskadd/deskadd.component';
import { DeskeditComponent } from './components/desk/deskedit/deskedit.component';
import { AddbillComponent } from './components/bill/addbill/addbill.component';
import { AddproductComponent } from './components/products/addproduct/addproduct.component';
import { EditproductComponent } from './components/products/editproduct/editproduct.component';
import { BilldetailComponent } from './components/bill/billdetail/billdetail.component';
import { SigninComponent } from './components/signin/signin.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RoleGuardService as RoleGuard } from './services/role-guard-service.service';


const routes: Routes = [

  {path:'', component: SigninComponent},
  {path:'logout',component:LogoutComponent},
  {path: 'product', children:[
    {path:'', component: DashboardComponent},
    {path:'add', component: AddproductComponent,
    canActivate:[RoleGuard],
    data:{ 
      expectedRole: 'admin'
    }},
    {path:'edit/:id', component: EditproductComponent,
    canActivate:[RoleGuard],
    data:{ 
      expectedRole: 'admin'
    }}
  ]},
  {path: 'users', children:[
    {path: '', component: UserComponent},
    {path:'add', component: AddnewmemberComponent,
    canActivate:[RoleGuard],
    data:{ 
      expectedRole: 'admin'
    }},
    {path:'edit/:id', component: EditmemberComponent,
    canActivate:[RoleGuard],
    data:{ 
      expectedRole: 'admin'
    }},
  ]},
  {path: 'desk', children:[
    {path: '', component: DesklistComponent},
    {path:'add', component: DeskaddComponent,
    canActivate:[RoleGuard],
    data:{ 
      expectedRole: 'admin'
    }},
    {path:'edit/:id', component: DeskeditComponent,
    canActivate:[RoleGuard],
    data:{ 
      expectedRole: 'admin'
    }},
  ]},
  {path: 'bill', children:[
    {path:'',component: TableComponent},
    {path:'add',component:AddbillComponent,
    canActivate:[RoleGuard],
    data:{ 
      expectedRole: 'admin'
    }},
    {path:'edit/:id', component: DetailBillComponent,
    canActivate:[RoleGuard],
    data:{ 
      expectedRole: 'admin'
    }},
    {path:'billdetail/:id', component: BilldetailComponent},
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}




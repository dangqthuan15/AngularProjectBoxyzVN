import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/products/product/dashboard.component';
import { DiskComponent } from './desk/disk.component';
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



const routes: Routes = [



  {path:'', component: SigninComponent},
  {path:'logout',component:LogoutComponent},
  {path: 'product', children:[
    {path:'', component: DashboardComponent},
    {path:'add', component: AddproductComponent},
    {path:'edit/:id', component: EditproductComponent}
  ]},
  {path: 'users', children:[
    {path: '', component: UserComponent},
    {path:'add', component: AddnewmemberComponent},
    {path:'edit/:id', component: EditmemberComponent},
  ]},
  {path: 'desk', children:[
    {path: '', component: DesklistComponent},
    {path:'add', component: DeskaddComponent},
    {path:'edit/:id', component: DeskeditComponent},
  ]},
  {path: 'bill', children:[
    {path:'',component: TableComponent},
    {path:'add',component:AddbillComponent},
    {path:'edit/:id', component: DetailBillComponent},
    {path:'billdetail/:id', component: BilldetailComponent},
    {path: 'product/:id', component: DashboardComponent},
  ]},
  {path: 'desk2', component: DiskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}




import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './product/dashboard.component';
import { DiskComponent } from './desk/disk.component';
import { TableComponent } from './components/bill/table.component';
import { DetailBillComponent } from './detail-bill/detail-bill.component';
import { UserComponent } from './components/member/userlist/user.component';
import { AddnewmemberComponent } from './components/member/addnewmember/addnewmember.component';
import { EditmemberComponent } from './components/member/editmember/editmember.component';
import { DesklistComponent } from './components/desk/desklist/desklist.component';
import { DeskaddComponent } from './components/desk/deskadd/deskadd.component';
import { DeskeditComponent } from './components/desk/deskedit/deskedit.component';


const routes: Routes = [
  {path: 'product', component: DashboardComponent},
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
  {path: 'bill', component: TableComponent},
  {path: 'desk2', component: DiskComponent},
  {path: 'detail-bill',component: DetailBillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}



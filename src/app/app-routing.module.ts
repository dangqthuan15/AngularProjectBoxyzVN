import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './product/dashboard.component';
import { DiskComponent } from './desk/disk.component';
import { TableComponent } from './bill/table.component';
import { UsersComponent } from './users/users.component';
import { DetailBillComponent } from './detail-bill/detail-bill.component';

const routes: Routes = [
  {
    path: 'product', component: DashboardComponent
  },
  {
    path: 'users', component: UsersComponent
  },
  {
    path: 'bill', component: TableComponent
  },
  {
    path: 'desk', component: DiskComponent
  },
  {
    path: 'detail-bill',component: DetailBillComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}



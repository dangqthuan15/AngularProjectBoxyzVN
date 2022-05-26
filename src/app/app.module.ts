import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './components/products/product/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { UserComponent } from './components/member/userlist/user.component';
import { TableComponent } from './components/bill/bill-list/table.component';
import { DiskComponent } from './desk/disk.component';
import { DetailBillComponent } from './components/bill/detail-bill/detail-bill.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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




@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    UserComponent,
    TableComponent,
    DiskComponent,
    DetailBillComponent,
    AddnewmemberComponent,
    EditmemberComponent,
    DesklistComponent,
    DeskaddComponent,
    DeskeditComponent,
    AddbillComponent,
    AddproductComponent,
    EditproductComponent,
    BilldetailComponent,
    SigninComponent,
    LogoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

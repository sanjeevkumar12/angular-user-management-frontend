import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { AddDoctorComponent } from './doctors/add-doctor/add-doctor.component';
import { EditDoctorComponent } from './doctors/edit-doctor/edit-doctor.component';
import { ListDoctorsComponent } from './doctors/list-doctors/list-doctors.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AddDoctorComponent,
    EditDoctorComponent,
    ListDoctorsComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

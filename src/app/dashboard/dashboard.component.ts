import { Component, OnInit } from '@angular/core';
import { DialogService } from '../core/dialog/dialog.service';
import { ChangePasswordComponent } from './change-password/change-password.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public dialogService: DialogService) { 
    const dialog = this.dialogService.open(ChangePasswordComponent,{}).afterClosed.subscribe(result => {
      console.log('Dialog closed', result);
    });
  }

  ngOnInit(): void {
  }

  changePassword(){

  }

}

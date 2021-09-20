import { Component, OnInit } from '@angular/core';
import { AlertDialogModel } from '../dialog-config';
import { DialogRef } from '../dialog-ref';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor(public config: AlertDialogModel, public dialog: DialogRef) { }

  ngOnInit(): void {
  }

  onClose() {
    this.dialog.close('some value');
  }
}

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

interface DialogData {
  modeName: string;
  modeStatus: string;
}

@Component({
  selector: 'app-modal-module',
  templateUrl: './modal-module.component.html',
  styles: []
})


export class ModalModuleComponent implements OnInit {

  closeResult: string;

  constructor() { }



  ngOnInit() {
  }

  

}

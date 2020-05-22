import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-owner-detail',
  templateUrl: './owner-detail.component.html',
  styleUrls: ['./owner-detail.component.css']
})
export class OwnerDetailComponent implements OnInit {

  @ViewChild('content', {static: false}) private content;
  closeResult = '';
  userLink: any;
  personID: any;
  payrollID: any;
  firstName: any;
  lastName: any;
  email: any;
  active: any;


  constructor(
    private modalService: NgbModal
    ) { }

  ngOnInit() {
  }

  popModal(userLink: any) {
   
    this.personID = userLink.personID;
    this.payrollID = userLink.payrollID;
    this.firstName = userLink.firstName;
    this.lastName = userLink.lastName;
    this.email = userLink.email;
    this.active = userLink.active;

    this.modalService.open(this.content, {ariaLabelledBy: 'modal-basic-title'})
    .result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

 getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }
}

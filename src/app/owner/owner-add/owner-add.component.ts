import { async } from '@angular/core/testing';
import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-owner-add',
  templateUrl: './owner-add.component.html',
  styleUrls: ['./owner-add.component.css']
})
export class OwnerAddComponent implements OnInit {

  @ViewChild('content', {static: false}) private content;
  @Output('saveClick') private saveClick: EventEmitter<any> = new EventEmitter();

    userLink: any;
    closeResult = '';
    users: any = [];
    personID: any;
    payrollID: any;
    firstName: any;
    lastName: any;
    email: any;
    
    confirmSave: any;

    // options select active
    options: any[] = ['Y', 'N'];
    active: any;


  constructor(
    private modalService: NgbModal,
    private user: UserService
  ) { }

  ngOnInit() {
  }


  open(userLink: any) {
   if (userLink) {
    this.personID = userLink ? userLink.personID : null;
    this.payrollID = userLink ? userLink.payrollID : null;
    this.firstName = userLink ? userLink.firstName : null;
    this.lastName = userLink ? userLink.lastName : null;
    this.email = userLink ? userLink.email : null;
    this.active = userLink ? userLink.active : 'Y';
   } else {
     userLink = null;
   }

   this.modalService.open(this.content, {ariaLabelledBy: 'modal-basic-title'})
    .result.then((result) => {
     // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
     // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
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


  private async sentSaveOK() {
       const data = {
        personID : this.personID,
        payrollID : this.payrollID,
        firstName : this.firstName,
        lastName : this.lastName,
        email : this.email,
        active : this.active
      };

       const chkID = this.payrollID;

       if (chkID) {
         try {
          if (this.personID) {
            await this.user.updateUser(this.personID, data)
              .subscribe((rs: any) => {
                if (rs.status) {
                  this.saveClick.emit(true);
                  this.modalService.dismissAll();
                } else {
                  alert(rs.error);
                }
              });
          } else {
            await this.user.createUser(data)
             .subscribe((rs: any) => {
              if (rs.status) {
                this.saveClick.emit(true);
                this.clearForm();
                this.modalService.dismissAll();
              } else {
                alert(rs.error);
              }
             });
          }
        } catch (e) {
          alert(e.code);
        }
    }

}

private clearForm() {
  this.personID = '';
  this.payrollID = '';
  this.firstName = '';
  this.lastName = '';
  this.email = '';
  this.active = '';

}


}



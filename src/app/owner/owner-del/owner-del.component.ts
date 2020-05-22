import { async } from '@angular/core/testing';
import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-owner-del',
  templateUrl: './owner-del.component.html',
  styleUrls: ['./owner-del.component.css']
})
export class OwnerDelComponent implements OnInit {
  @Input() public userLink;
  @ViewChild('content', {static: false}) private content;
  @Output('delClick') private delClick: EventEmitter<any> = new EventEmitter();

  public users;
  closeResult = '';
  personID: any;
  firstName: any;
  lastName: any;

  constructor(
    private modalService: NgbModal,
    private user: UserService
  ) { }

  ngOnInit() {

  }

  open(userLink: any) {
    if (userLink) {
      this.personID = userLink.personID;
      this.firstName = userLink.firstName;
      this.lastName = userLink.lastName;

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
  
  async sentDelOK() {
    const chkID = this.personID;
    try {
        if( chkID ) {
          await this.user.deleteUser(this.personID)
          .subscribe((rs: any) => {
            if (rs.status) {
              this.delClick.emit(true);
              this.modalService.dismissAll();
            } else {
              alert(rs.error);
            }
          });
        }
      }
      catch (e) { alert(e); }
    

  }

}

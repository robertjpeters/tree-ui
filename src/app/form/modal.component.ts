import { Component } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppStateSelectors } from '../store/app/app-state.selectors';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'modal-component',
  templateUrl: './modal.component.html'
})
export class ModalComponent {
  private errorList: string[];
  @ViewChild('content') private content: any;

  constructor(
    private modalService: NgbModal,
    private appStateSelectors: AppStateSelectors
  ) {
    this.appStateSelectors.errors.subscribe(errors => {
      this.errorList = [];

      if (errors) {
        this.errorList = Object.keys(errors).map(key => errors[key].msg);
      }

      if (this.errorList.length) {
        this.open(this.content);
      }
    });
  }

  open(content: any) {
    this.modalService.open(content).result.then((result) => {

    }, (reason) => {

    });
  }
}

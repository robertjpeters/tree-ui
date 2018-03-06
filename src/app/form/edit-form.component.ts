import {Component, Input, OnInit} from '@angular/core';
import { Factory } from '../store/app/factory.model';
import { AppStateActions } from '../store/app/app-state.actions';
@Component({
  selector: 'edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  @Input() factory: Factory;

  constructor( private appStateActions: AppStateActions ) {}

  ngOnInit() {
    if (!this.factory) {
      this.factory = new Factory();
    }
  }

  onSubmit() {
    if (!this.factory._id) {
      // We're creating a new one, so we no longer want anything to be "selected"
      this.appStateActions.setSelectedFactory(null);
      this.appStateActions.createFactory(this.factory);
    } else {
      this.appStateActions.updateFactory(this.factory);
    }
  }
}

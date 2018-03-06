import { Component } from '@angular/core';
import { AppStateActions } from './store/app/app-state.actions';
import { AppStateSelectors } from './store/app/app-state.selectors';
import { Factory } from './store/app/factory.model';
import * as io from 'socket.io-client';

@Component({
  selector: 'factory',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  factories: Factory[];
  private url = 'http://localhost:4200';
  private socket: any;
  private selectedItem: Factory;

  constructor(
    private appActions: AppStateActions,
    private appStateSelectors: AppStateSelectors
  ) {
    // Socket.io listeners for new factories and updates
    this.socket = io.connect(this.url);
    this.socket.on('list', (data: any) => {
      this.appActions.setFactories(data);
    });
    this.socket.on('update', (data: any) => {
      this.appActions.setFactories(data);
    });

    // Subscriber for factory list update
    this.appStateSelectors.factories.subscribe(data => {
      this.factories = [];

      // Only proceed if something actually is in data
      if (data) {
        let found = false;
        // Loop and look for our existing selected item, and re-select it
        for (let factory of data) {
          if (this.selectedItem && factory._id === this.selectedItem._id) {
            this.appActions.setSelectedFactory(factory);
            found = true;
          }
          this.factories.push(factory);
        }

        // If we don't find it, we need to clear out the selection (perhaps it was deleted)
        if (!found) {
          this.appActions.setSelectedFactory(null);
        }
      }
    });

    // Subscriber for factory list update
    this.appStateSelectors.selectedFactory.subscribe(data => {
      this.selectedItem = data;
    });
  }

  // Set the selected factory
  selectItem(factory: Factory) {
    this.appActions.setSelectedFactory(factory);
  }

  // Delete factory
  deleteItem(factory: Factory) {
    this.appActions.deleteFactory(factory);
  }

  // Regenerate chjildren
  generateChildren(factory: Factory) {
    this.appActions.generateChildren(factory);
  }
}

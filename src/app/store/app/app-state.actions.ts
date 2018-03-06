import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppStore } from '../app-store';
import { ApiService } from '../../service/api.service';
import { Factory } from './factory.model';

@Injectable()

export class AppStateActions {
  static FACTORY_LIST: string = 'FACTORY_LIST';
  static SET_FACTORIES: string = 'SET_FACTORIES';
  static SET_SELECTED_FACTORY: string = 'SET_SELECTED_FACTORY';
  static SET_ERRORS: string = 'SET_ERRORS';

  constructor(
    private store: NgRedux<IAppStore>,
    private api: ApiService
  ) {}

  getFactories() {
    return this.api.getFactories().then(data => {
      this.store.dispatch({
        type: AppStateActions.FACTORY_LIST,
        payload: data
      });
    }).catch((error: any) => this.errors(error));
  }

  setFactories(factories: Factory[]) {
    return this.store.dispatch({
      type: AppStateActions.SET_FACTORIES,
      payload: factories
    });
  }

  setSelectedFactory(factory: Factory) {
    return this.store.dispatch({
      type: AppStateActions.SET_SELECTED_FACTORY,
      payload: factory
    });
  }

  deleteFactory(factory: Factory) {
    return this.api.deleteFactory(factory).catch((error: any) => this.errors(error));
  }

  createFactory(factory: Factory) {
    return this.api.createFactory(factory).catch((error: any) => this.errors(error));
  }

  updateFactory(factory: Factory) {
    return this.api.updateFactory(factory).catch((error: any) => this.errors(error));
  }

  generateChildren(factory: Factory) {
    return this.api.generateChildren(factory).catch((error: any) => this.errors(error));
  }

  errors(errors: any) {
    return this.store.dispatch({
      type: AppStateActions.SET_ERRORS,
      payload: errors.error.errors
    });
  }
}

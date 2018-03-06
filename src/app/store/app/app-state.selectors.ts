import { Injectable } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { Factory } from './factory.model';
import { IAppStore } from '../app-store';

export const factories = (state: IAppStore) => state.appState.factories as Factory[];
export const selectedFactory = (state: IAppStore) => state.appState.selectedFactory as Factory;
export const errors = (state: IAppStore) => state.appState.errors as object;

@Injectable()

export class AppStateSelectors {
  @select(factories)
  factories: Observable<Factory[]>;

  @select(selectedFactory)
  selectedFactory: Observable<Factory>;

  @select(errors)
  errors: Observable<object>;
}

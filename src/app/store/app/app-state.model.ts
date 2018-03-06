import { Factory } from './factory.model';

export interface IAppState {
  factories: Factory[];
  selectedFactory: Factory;
  errors: any;
}

export class AppState implements IAppState {
  factories: Factory[];
  selectedFactory: Factory;
  errors: any;
}

import { AppState } from './app-state.model';
import { AppStateActions } from './app-state.actions';

export const AppStateInitial = new AppState();

export const AppStateReducer = (state: AppState = AppStateInitial, action: any) : AppState => {
  switch (action.type) {
    case AppStateActions.FACTORY_LIST:
      return Object.assign({}, state, { factories: action.payload });
    case AppStateActions.SET_FACTORIES:
      return Object.assign({}, state, { factories: action.payload });
    case AppStateActions.SET_SELECTED_FACTORY:
      return Object.assign({}, state, { selectedFactory: action.payload });
    case AppStateActions.SET_ERRORS:
      return Object.assign({}, state, { errors: action.payload });
    default:
      return state;
  }
};

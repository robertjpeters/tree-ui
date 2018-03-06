import {combineReducers, createStore, Reducer} from 'redux';
import { AppState } from './app/app-state.model';
import { AppStateReducer } from './app/app-state.reducer';

export interface IAppStore {
  appState?: AppState;
}

export function configureStore() {
  const rootReducer: Reducer<IAppStore> = combineReducers<IAppStore>({
    appState : AppStateReducer
  });
  const store = createStore(rootReducer);

  return { store };
}

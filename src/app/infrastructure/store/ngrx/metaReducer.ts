import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { AppState } from '@src/app/core/model/types/state/app-state';
import { localStorageSyncReducer } from './localStorageMetaReducer';
import { themeLsReducer } from './reducers/localstorage/theme-ls.reducer';
import { sessionStorageSyncReducer } from './sessionStorageMetaReducer';

export const reducers: ActionReducerMap<AppState> = {
  theme: themeLsReducer,
};

export const metaReducers: MetaReducer<any, any>[] = [
  localStorageSyncReducer,
  sessionStorageSyncReducer,
];

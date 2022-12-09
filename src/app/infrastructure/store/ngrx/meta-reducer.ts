import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { AppState } from '@src/app/core/model/types/state/app-state';
import { localStorageSyncReducer } from './local-storage-meta-reducer';
import { themeLsReducer } from './reducers/local-storage/theme-ls.reducer';
import { sessionStorageSyncReducer } from './session-storage-meta-reducer';

export const reducers: ActionReducerMap<AppState> = {
  theme: themeLsReducer,
};

export const metaReducers: MetaReducer<any, any>[] = [
  localStorageSyncReducer,
  sessionStorageSyncReducer,
];

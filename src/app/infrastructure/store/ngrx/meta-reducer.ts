import { AppState } from '@core/model/types/state/app-state.type';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { localStorageSyncReducer } from './local-storage-meta-reducer';
import { themeReducer } from './reducers/local-storage/theme.reducer';
import { providerReducer } from './reducers/session-storage/provider.reducer';
import { sessionStorageSyncReducer } from './session-storage-meta-reducer';

export const reducers: ActionReducerMap<AppState> = {
  theme: themeReducer,
  provider: providerReducer,
};

export const metaReducers: MetaReducer<any, any>[] = [
  localStorageSyncReducer,
  sessionStorageSyncReducer,
];

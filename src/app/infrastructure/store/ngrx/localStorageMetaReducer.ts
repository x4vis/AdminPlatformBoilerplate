import { AppLsState } from '@core/model/types/app-ls-state';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { secureStore } from '@src/app/core/helpers/secure-store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { themeLsReducer } from './reducers/localstorage/theme-ls.reducer';

export const reducersLS: ActionReducerMap<AppLsState> = {
  theme: themeLsReducer,
}

function localStorageSyncReducer(reducer: ActionReducer<AppLsState>): ActionReducer<AppLsState> {
  return localStorageSync({
    keys     : [{ 'theme': { ...secureStore } }],
    rehydrate: true,
  })(reducer);
}

export const metaReducersLS: MetaReducer<AppLsState, any>[] = [ localStorageSyncReducer ];
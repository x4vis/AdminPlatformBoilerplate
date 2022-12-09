import { secureStore } from '@core/helpers/secure-store';
import { ActionReducer } from '@ngrx/store';
import { AppSessionStorageState } from '@src/app/core/model/types/state/app-session-storage-state';
import { localStorageSync } from 'ngrx-store-localstorage';

export const sessionStorageSyncReducer = (
  reducer: ActionReducer<AppSessionStorageState>
): ActionReducer<AppSessionStorageState> =>
  localStorageSync({
    keys: [{ theme: { ...secureStore } }],
    rehydrate: true,
    storage: sessionStorage,
  })(reducer);

import { secureStore } from '@core/helpers/secure-store';
import { AppSessionStorageState } from '@core/model/types/state/session-storage/app-session-storage-state.type';
import { ActionReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

export const sessionStorageSyncReducer = (
  reducer: ActionReducer<AppSessionStorageState>
): ActionReducer<AppSessionStorageState> =>
  localStorageSync({
    keys: [{ provider: { ...secureStore } }],
    rehydrate: true,
    storage: sessionStorage,
  })(reducer);

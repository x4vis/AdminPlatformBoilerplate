import { secureStore } from '@core/helpers/secure-store';
import { AppLocalStorageState } from '@core/model/types/state/local-storage/app-local-storage-state.type';
import { ActionReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

export const localStorageSyncReducer = (
  reducer: ActionReducer<AppLocalStorageState>
): ActionReducer<AppLocalStorageState> =>
  localStorageSync({
    keys: [{ theme: { ...secureStore } }],
    rehydrate: true,
  })(reducer);

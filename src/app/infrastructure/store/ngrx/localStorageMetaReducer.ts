import { ActionReducer } from '@ngrx/store';
import { secureStore } from '@src/app/core/helpers/secure-store';
import { AppLocalStorageState } from '@src/app/core/model/types/state/app-local-storage-state';
import { localStorageSync } from 'ngrx-store-localstorage';

export const localStorageSyncReducer = (
  reducer: ActionReducer<AppLocalStorageState>
): ActionReducer<AppLocalStorageState> =>
  localStorageSync({
    keys: [{ theme: { ...secureStore } }],
    rehydrate: true,
  })(reducer);

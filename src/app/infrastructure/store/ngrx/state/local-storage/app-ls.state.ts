import { AppLocalStorageState } from '@src/app/core/model/types/state/app-local-storage-state';
import { themeLsInitialState } from './theme-ls.state';

export const appLsInitialState: AppLocalStorageState = {
  theme: themeLsInitialState,
};

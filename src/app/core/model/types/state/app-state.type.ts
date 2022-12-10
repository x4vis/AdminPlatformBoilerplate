import { AppLocalStorageState } from './local-storage/app-local-storage-state.type';
import { AppSessionStorageState } from './session-storage/app-session-storage-state.type';

export type AppState = AppLocalStorageState & AppSessionStorageState;

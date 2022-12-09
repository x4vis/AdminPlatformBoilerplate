import { AppLocalStorageState } from './app-local-storage-state';
import { AppSessionStorageState } from './app-session-storage-state';

export type AppState = AppLocalStorageState & AppSessionStorageState;

import { AppSessionStorageState } from '../app-session-storage-state';
import { AppLocalStorageState } from './app-local-storage-state';

export type AppState = AppLocalStorageState & AppSessionStorageState;

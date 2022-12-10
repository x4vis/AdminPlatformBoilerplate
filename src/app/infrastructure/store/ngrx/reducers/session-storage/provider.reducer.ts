import { ProviderState } from '@core/model/types/state/session-storage/provider-state.type';
import { updateProvider } from '@infrastructure/store/ngrx/actions/session-storage/provider.actions';
import { providerInitialState } from '@infrastructure/store/ngrx/state/session-storage/provider.state';
import { Action, createReducer, on } from '@ngrx/store';

const _providerReducer = createReducer(
  providerInitialState,
  on(updateProvider, (state, { payload }) => ({
    ...state,
    provider: payload.provider,
  }))
);

export const providerReducer = (state: any, action: Action): ProviderState =>
  _providerReducer(state, action);

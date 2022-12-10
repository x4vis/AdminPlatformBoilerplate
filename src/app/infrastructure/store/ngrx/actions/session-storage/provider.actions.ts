import { ProviderState } from '@core/model/types/state/session-storage/provider-state.type';
import { createAction, props } from '@ngrx/store';

export const updateProvider = createAction(
  '[Provider] Update Provider',
  props<{ payload: { provider: ProviderState } }>()
);

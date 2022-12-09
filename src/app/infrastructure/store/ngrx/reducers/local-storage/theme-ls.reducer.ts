import { Action, createReducer, on } from '@ngrx/store';
import { themeLsState } from '@src/app/core/model/types/state/theme-ls-state';
import { updateLsTheme } from '../../actions/local-storage/theme-ls.actions';
import { themeLsInitialState } from '../../state/local-storage/theme-ls.state';

const _themeLsReducer = createReducer(
  themeLsInitialState,
  on(updateLsTheme, (state, { payload }) => ({
    ...state,
    theme: payload.theme,
  }))
);

export function themeLsReducer(state: any, action: Action): themeLsState {
  return _themeLsReducer(state, action);
}

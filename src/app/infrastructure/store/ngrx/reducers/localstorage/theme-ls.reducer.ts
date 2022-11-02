import { Action, createReducer, on } from '@ngrx/store';
import { themeLsState } from '@src/app/core/model/types/theme-ls-state';
import { updateLsTheme } from '../../actions/localstorage/theme-ls.actions';
import { themeLsInitialState } from '../../state/localstorage/theme-ls.state';

const _themeLsReducer = createReducer(
  themeLsInitialState,
  on(updateLsTheme, (state, { payload }) => ({
    ...state,
    theme: payload.theme
  }))
);

export function themeLsReducer(state: any, action: Action): themeLsState {
  return _themeLsReducer(state, action);
}
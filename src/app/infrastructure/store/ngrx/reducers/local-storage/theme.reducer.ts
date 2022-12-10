import { ThemeState } from '@core/model/types/state/local-storage/theme-state.type';
import { updateTheme } from '@infrastructure/store/ngrx/actions/local-storage/theme.actions';
import { themeInitialState } from '@infrastructure/store/ngrx/state/local-storage/theme.state';
import { Action, createReducer, on } from '@ngrx/store';

const _themeReducer = createReducer(
  themeInitialState,
  on(updateTheme, (state, { payload }) => ({
    ...state,
    theme: payload.theme,
  }))
);

export const themeReducer = (state: any, action: Action): ThemeState =>
  _themeReducer(state, action);

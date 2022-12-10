import { ThemeState } from '@core/model/types/state/local-storage/theme-state.type';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectTheme = createSelector(
  createFeatureSelector<ThemeState>('theme'),
  state => state
);

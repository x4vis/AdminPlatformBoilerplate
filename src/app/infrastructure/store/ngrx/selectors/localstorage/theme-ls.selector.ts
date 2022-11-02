import { themeLsState } from '@core/model/types/theme-ls-state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectLsTheme = createSelector(
  createFeatureSelector<themeLsState>('theme'),
  (state) => state
);
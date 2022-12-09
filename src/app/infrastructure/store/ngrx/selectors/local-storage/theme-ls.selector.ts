import { createFeatureSelector, createSelector } from '@ngrx/store';
import { themeLsState } from '@src/app/core/model/types/state/theme-ls-state';

export const selectLsTheme = createSelector(
  createFeatureSelector<themeLsState>('theme'),
  state => state
);

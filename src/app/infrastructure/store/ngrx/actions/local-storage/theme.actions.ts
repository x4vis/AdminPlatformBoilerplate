import { createAction, props } from '@ngrx/store';

export const updateTheme = createAction(
  '[Theme] Update Theme',
  props<{ payload: { theme: string } }>()
);

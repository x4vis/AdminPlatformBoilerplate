import { createAction, props } from '@ngrx/store'

export const updateLsTheme = createAction(
  '[Theme] Update Theme',
  props<{ payload: { theme: string } }>()
)
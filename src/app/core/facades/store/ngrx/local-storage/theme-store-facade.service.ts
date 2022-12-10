import { Injectable } from '@angular/core';
import { updateTheme } from '@infrastructure/store/ngrx/actions/local-storage/theme.actions';
import { selectTheme } from '@infrastructure/store/ngrx/selectors/local-storage/theme.selector';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ThemeStoreFacadeService {
  constructor(private _store: Store) {}

  getCurrentTheme(): Observable<string> {
    return this._store
      .select(selectTheme)
      .pipe(map(themeState => themeState.theme));
  }

  setCurrentTheme(theme: string): void {
    this._store.dispatch(updateTheme({ payload: { theme } }));
  }
}

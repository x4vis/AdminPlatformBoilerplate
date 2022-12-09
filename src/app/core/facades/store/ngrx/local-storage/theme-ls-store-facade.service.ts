import { Injectable } from '@angular/core';
import { selectLsTheme } from '@src/app/infrastructure/store/ngrx/selectors/local-storage/theme-ls.selector';
import { Store } from '@ngrx/store';
import { updateLsTheme } from '@src/app/infrastructure/store/ngrx/actions/local-storage/theme-ls.actions';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ThemeLsStoreFacadeService {
  constructor(private _store: Store) {}

  getCurrentTheme(): Observable<string> {
    return this._store
      .select(selectLsTheme)
      .pipe(map(themeState => themeState.theme));
  }

  setCurrentTheme(theme: string): void {
    this._store.dispatch(updateLsTheme({ payload: { theme } }));
  }
}

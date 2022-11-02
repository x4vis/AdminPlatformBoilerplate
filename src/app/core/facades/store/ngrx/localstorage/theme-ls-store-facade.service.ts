import { Injectable } from '@angular/core';
import { updateLsTheme } from '@infrastructure/store/ngrx/actions/localstorage/theme-ls.actions';
import { selectLsTheme } from '@infrastructure/store/ngrx/selectors/localstorage/theme-ls.selector';
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ThemeLsStoreFacadeService {

  constructor(private _store: Store) { }

  getCurrentTheme(): Observable<string> {
    return this._store.select(selectLsTheme).pipe(map((themeState) => themeState.theme));
  }

  setCurrentTheme(theme: string): void {
    this._store.dispatch(updateLsTheme({ payload: { theme } }))
  }
}

import { Injectable } from '@angular/core';
import { ThemeLsStoreFacadeService } from '../facades/store/ngrx/local-storage/theme-ls-store-facade.service';
import { ThemeType } from '../model/enums/theme-type.enum';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  currentTheme: string = '';

  constructor(private _themeLsStoreFacade: ThemeLsStoreFacadeService) {
    this.setCurrentThemeFromStateLs();
  }

  private setCurrentThemeFromStateLs(): void {
    this._themeLsStoreFacade.getCurrentTheme().subscribe({
      next: theme => {
        if (theme) {
          this.currentTheme = theme;
          return;
        }

        this.currentTheme = ThemeType.default;
      },
    });
  }

  private updateCurrentThemeStateLs(): void {
    this._themeLsStoreFacade.setCurrentTheme(this.currentTheme);
  }

  private reverseTheme(theme: string): ThemeType {
    return theme === ThemeType.dark ? ThemeType.default : ThemeType.dark;
  }

  private removeUnusedTheme(theme: ThemeType): void {
    document.documentElement.classList.remove(theme);
    const removedThemeStyle = document.getElementById(theme);
    if (removedThemeStyle) {
      document.head.removeChild(removedThemeStyle);
    }
  }

  private loadCss(href: string, id: string): Promise<Event> {
    return new Promise((resolve, reject) => {
      const style = document.createElement('link');
      style.rel = 'stylesheet';
      style.href = href;
      style.id = id;
      style.onload = resolve;
      style.onerror = reject;
      document.head.append(style);
    });
  }

  public loadTheme(firstLoad = true): Promise<Event> {
    const theme = this.currentTheme;
    this.updateCurrentThemeStateLs();
    if (firstLoad) {
      document.documentElement.classList.add(theme);
    }
    return new Promise<Event>((resolve, reject) => {
      this.loadCss(`${theme}.css`, theme).then(
        e => {
          if (!firstLoad) {
            document.documentElement.classList.add(theme);
          }
          this.removeUnusedTheme(this.reverseTheme(theme));
          resolve(e);
        },
        e => reject(e)
      );
    });
  }

  public toggleTheme(): Promise<Event> {
    this.currentTheme = this.reverseTheme(this.currentTheme);
    return this.loadTheme(false);
  }
}

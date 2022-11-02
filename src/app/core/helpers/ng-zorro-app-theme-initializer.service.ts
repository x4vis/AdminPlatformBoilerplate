import { APP_INITIALIZER } from '@angular/core';
import { ThemeService } from './theme.service';

export const NgZorroAppThemeInitializer = {
  provide   : APP_INITIALIZER,
  useFactory: (themeService: ThemeService) => () => themeService.loadTheme(),
  deps      : [ ThemeService ],
  multi     : true,
};
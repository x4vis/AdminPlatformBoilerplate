import { Component, OnInit } from '@angular/core';
import { ThemeService } from '@core/helpers/theme.service';
import { MenuItems } from '@core/model/types/menu-items.type';
import menuItems from "src/assets/menuItems.json";

@Component({
  selector   : 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls  : [ './layout.component.scss' ]
})
export class LayoutComponent implements OnInit {

  menuItems: MenuItems[] = menuItems;
  isCollapsed: boolean = false;

  constructor(private _themeService: ThemeService) { }

  ngOnInit(): void {
    // do something
  }

  toggleTheme(): void {
    this._themeService.toggleTheme().then();
  }
}

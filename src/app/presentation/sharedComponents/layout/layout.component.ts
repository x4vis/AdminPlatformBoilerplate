import { Component, OnInit } from '@angular/core';
import { MenuItems } from '@src/app/core/model/types/menu-items.type';
import menuItems from "src/assets/menuItems.json";

@Component({
  selector   : 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls  : [ './layout.component.scss' ]
})
export class LayoutComponent implements OnInit {

  menuItems: MenuItems[] = menuItems;
  isCollapsed: boolean = false;

  constructor() { }

  ngOnInit(): void {
    // do something
  }
}

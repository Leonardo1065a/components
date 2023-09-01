import { Component } from '@angular/core';
import { navItems } from '../sidebar/sidebar-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  navItems = navItems;

  constructor() {}
}

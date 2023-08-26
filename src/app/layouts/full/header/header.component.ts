import { Component, EventEmitter, Output } from '@angular/core';
import { navItems } from '../sidebar/sidebar-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() handleToggle = new EventEmitter<any>();

  navItems = navItems;

  constructor() {}
}

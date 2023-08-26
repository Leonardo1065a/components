import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from '../../nav-item';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: [],
})
export class AppNavItemComponent {
  @Input() item: NavItem | any;

  constructor(public router: Router) {}
}

import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subject } from 'rxjs';
import { navItems } from './sidebar-data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit, OnDestroy {
  @ViewChild('sidebar') sidebar: ElementRef;

  private unsubscribe$ = new Subject();

  _showBranding: boolean;

  navItems = navItems;

  constructor() {}

  ngOnInit(): void {}

  toggleClasse() {
    try {
      const elemento = this.sidebar.nativeElement;

      if (elemento.classList.contains('active')) {
        elemento.classList.remove('active');
        this._showBranding = true;
      } else {
        elemento.classList.add('active');
        this._showBranding = false;
      }
    } catch (error) {
      console.log(error);
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(null);
    this.unsubscribe$.complete();
  }
}

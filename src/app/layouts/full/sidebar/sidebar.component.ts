import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { navItems } from './sidebar-data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit, OnDestroy {
  @Input() handleToggle: EventEmitter<any>;

  @ViewChild('sidebar') sidebar: ElementRef;

  private unsubscribe$ = new Subject();

  navItems = navItems;

  constructor() {}

  ngOnInit(): void {
    this.handleToggle.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      this.toggleClasse();
    });
  }

  toggleClasse() {
    try {
      const elemento = this.sidebar.nativeElement;

      if (elemento.classList.contains('active')) {
        elemento.classList.remove('active');
      } else {
        elemento.classList.add('active');
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

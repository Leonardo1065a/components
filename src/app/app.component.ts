import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'wave-ui-compiler';

  isLoading = false;
  isLoading1 = true;

  load() {
    console.log('load');
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  load2() {
    console.log('load');
    this.isLoading1 = true;

    setTimeout(() => {
      this.isLoading1 = false;
    }, 1000);
  }
}

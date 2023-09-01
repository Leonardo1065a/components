import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <div class="branding">
      <div class="d-flex justify-content-start align-items-center">
        <img src="./assets/img/branding.png" class="align-middle" alt="logo" />
      </div>
    </div>
  `,
})
export class BrandingComponent {
  constructor() {}
}

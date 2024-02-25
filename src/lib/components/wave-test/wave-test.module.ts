import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WaveTestComponent } from './wave-test.component';

@NgModule({
  declarations: [WaveTestComponent],
  imports: [CommonModule],
  exports: [WaveTestComponent],
})
export class WaveTestModule {}

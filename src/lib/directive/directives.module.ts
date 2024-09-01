import { NgModule } from '@angular/core';
import { WaveLoadingDirective } from './loading';

@NgModule({
  declarations: [WaveLoadingDirective],
  exports: [WaveLoadingDirective],
})
export class WaveDirectivesModule {}

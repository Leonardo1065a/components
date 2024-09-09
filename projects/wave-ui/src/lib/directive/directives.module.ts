import { NgModule } from '@angular/core';
import { WaveLoadingDirective } from './loading.directive';

@NgModule({
  declarations: [WaveLoadingDirective],
  exports: [WaveLoadingDirective],
})
export class WaveDirectivesModule {}

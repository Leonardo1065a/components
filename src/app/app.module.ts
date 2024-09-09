import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  WaveTestModule,
  WaveDirectivesModule,
} from 'projects/wave-ui/src/public-api';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, WaveTestModule, WaveDirectivesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

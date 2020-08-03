import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { MatCardModule} from '@angular/material/card';
import {DropdownModule, ButtonModule, DataGridModule, HeroMetricModule } from '@costar/crem-lib';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { HeroMetricModule } from '../../../component-workspace/dist/crem-lib/src/lib/hero-metric/public-api';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    DropdownModule,
    MatCardModule,
    ButtonModule,
    DataGridModule,
    HeroMetricModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

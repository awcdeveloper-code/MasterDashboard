import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';

import { Component1Component } from '../component1/component1.component';
import { Component11Component } from '../component11/component11.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AppComponent,
    Component1Component,
    Component11Component,
  ],
  exports: [
    AppComponent
  ]})

export class DashboardModule { }

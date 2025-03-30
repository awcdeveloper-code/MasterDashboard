import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';

import { Component1Component } from '../component1/component1.component';
import { Component2Component } from '../component2/component2.component';
import { Component3Component } from '../component3/component3.component';
import { Component4Component } from '../component4/component4.component';
import { Component5Component } from '../component5/component5.component';
import { Component6Component } from '../component6/component6.component';
import { Component7Component } from '../component7/component7.component';
import { Component8Component } from '../component8/component8.component';
import { Component9Component } from '../component9/component9.component';
import { Component10Component } from '../component10/component10.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AppComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    Component4Component,
    Component5Component,
    Component6Component,
    Component7Component,
    Component8Component,
    Component9Component,
    Component10Component,
  ],
  exports: [
    AppComponent
  ]})

export class DashboardModule { }

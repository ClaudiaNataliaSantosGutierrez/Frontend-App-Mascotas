import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitaRoutingModule } from './visita-routing.module';
import { HacerVisitaComponent } from './hacer-visita/hacer-visita.component';


@NgModule({
  declarations: [
    HacerVisitaComponent
  ],
  imports: [
    CommonModule,
    VisitaRoutingModule
  ]
})
export class VisitaModule { }

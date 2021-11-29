import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HacerVisitaComponent } from './hacer-visita/hacer-visita.component';

const routes: Routes = [
  {
    path: 'hacer-visita',
    component : HacerVisitaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitaRoutingModule { }

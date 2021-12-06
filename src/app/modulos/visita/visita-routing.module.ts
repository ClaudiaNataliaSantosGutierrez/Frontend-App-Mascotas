import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarVisitaComponent } from './buscar-visita/buscar-visita.component';
import { EditarVisitaComponent } from './editar-visita/editar-visita.component';
import { EliminarVisitaComponent } from './eliminar-visita/eliminar-visita.component';
import { HacerVisitaComponent } from './hacer-visita/hacer-visita.component';

const routes: Routes = [
  {
    path : 'listar-visita',
    component : BuscarVisitaComponent
  },
  {
    path: 'hacer-visita',
    component : HacerVisitaComponent
  },
  {
    path : 'editar-visita/:id',
    component : EditarVisitaComponent
  },
  {
    path : 'eliminar-visita',
    component : EliminarVisitaComponent
  },
  {
    path : 'buscar-visita',
    component : BuscarVisitaComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitaRoutingModule { }

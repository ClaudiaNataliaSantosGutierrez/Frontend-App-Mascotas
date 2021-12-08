import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { BuscarVisitaComponent } from './buscar-visita/buscar-visita.component';
import { EditarVisitaComponent } from './editar-visita/editar-visita.component';
import { EliminarVisitaComponent } from './eliminar-visita/eliminar-visita.component';
import { HacerVisitaComponent } from './hacer-visita/hacer-visita.component';

const routes: Routes = [
  {
    path: 'hacer-visita',
    component : HacerVisitaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'editar-visita/:id',
    component : EditarVisitaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'eliminar-visita/:id',
    component : EliminarVisitaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'buscar-visita',
    component : BuscarVisitaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'listar-visitas',
    component : BuscarVisitaComponent,
    canActivate: [ValidadorSesionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitaRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarSolicitudComponent } from './buscar-solicitud/buscar-solicitud.component';
import { CrearSolicitudComponent } from './crear-solicitud/crear-solicitud.component';
import { EditarSolicitudComponent } from './editar-solicitud/editar-solicitud.component';
import { EliminarSolicitudComponent } from './eliminar-solicitud/eliminar-solicitud.component';

const routes: Routes = [
  {
    path: 'crear-solicitud',
    component: CrearSolicitudComponent
  },
  {
    path: 'editar-solicitud/:id',
    component: EditarSolicitudComponent
  },
  {
    path: 'eliminar-solicitud/:id',
    component: EliminarSolicitudComponent
  },
  {
    path: 'buscar-solicitud',
    component: BuscarSolicitudComponent
  },
  {
    path: 'listar-solicitudes',
    component: BuscarSolicitudComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudesRoutingModule { }

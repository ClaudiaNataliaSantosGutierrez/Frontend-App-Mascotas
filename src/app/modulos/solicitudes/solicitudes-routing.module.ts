import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { BuscarSolicitudComponent } from './buscar-solicitud/buscar-solicitud.component';
import { CrearSolicitudComponent } from './crear-solicitud/crear-solicitud.component';
import { EditarSolicitudComponent } from './editar-solicitud/editar-solicitud.component';
import { EliminarSolicitudComponent } from './eliminar-solicitud/eliminar-solicitud.component';

const routes: Routes = [
  {
    path: 'crear-solicitud',
    component: CrearSolicitudComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'editar-solicitud/:id',
    component: EditarSolicitudComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'eliminar-solicitud/:id',
    component: EliminarSolicitudComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'buscar-solicitud',
    component: BuscarSolicitudComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'listar-solicitudes',
    component: BuscarSolicitudComponent,
    canActivate: [ValidadorSesionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudesRoutingModule { }

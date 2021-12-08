import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';

const routes: Routes = [
  {
    path: 'cambio-clave',
    component: CambioClaveComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'identificacion',
    component: IdentificacionComponent
  },
  {
    path: 'cerrar-sesion',
    component: CerrarSesionComponent
  },
  {
    path: 'recuperar-clave',
    component: RecuperarClaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }

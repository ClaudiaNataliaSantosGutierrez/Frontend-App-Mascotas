import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { BuscarMascotaComponent } from './mascotas/buscar-mascota/buscar-mascota.component';
import { CrearMascotaComponent } from './mascotas/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './mascotas/editar-mascota/editar-mascota.component';
import { EliminarMascotaComponent } from './mascotas/eliminar-mascota/eliminar-mascota.component';
import { BuscarPersonaComponent } from './personas/buscar-persona/buscar-persona.component';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './personas/editar-persona/editar-persona.component';
import { EliminarPersonaComponent } from './personas/eliminar-persona/eliminar-persona.component';
import { BuscarVeterinariaComponent } from './veterinarias/buscar-veterinaria/buscar-veterinaria.component';
import { CrearVeterinariaComponent } from './veterinarias/crear-veterinaria/crear-veterinaria.component';
import { EditarVeterinariaComponent } from './veterinarias/editar-veterinaria/editar-veterinaria.component';
import { EliminarVeterinariaComponent } from './veterinarias/eliminar-veterinaria/eliminar-veterinaria.component';
import { BuscarVeterinarioComponent } from './veterinarios/buscar-veterinario/buscar-veterinario.component';
import { CrearVeterinarioComponent } from './veterinarios/crear-veterinario/crear-veterinario.component';
import { EditarVeterinarioComponent } from './veterinarios/editar-veterinario/editar-veterinario.component';
import { EliminarVeterinarioComponent } from './veterinarios/eliminar-veterinario/eliminar-veterinario.component';

const routes: Routes = [
  //Rutas Para Persona
  {
    path: 'crear-persona',
    component: CrearPersonaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'editar-persona/:id',
    component: EditarPersonaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'eliminar-persona/:id',
    component: EliminarPersonaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'buscar-persona',
    component: BuscarPersonaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'listar-personas',
    component: BuscarPersonaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  //Rutas para Mascotas
  {
    path: 'crear-mascota',
    component: CrearMascotaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'editar-mascota/:id',
    component: EditarMascotaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'eliminar-mascota/:id',
    component: EliminarMascotaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'buscar-mascota',
    component: BuscarMascotaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'listar-mascotas',
    component: BuscarMascotaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  //Rutas para Veterinarios
  {
    path: 'crear-veterinario',
    component: CrearVeterinarioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'editar-veterinario/:id',
    component: EditarVeterinarioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'eliminar-veterinario/:id',
    component: EliminarVeterinarioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'buscar-veterinario',
    component: BuscarVeterinarioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'listar-veterinarios',
    component: BuscarVeterinarioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  //Rutas Para Veterinaria
  {
    path: 'crear-veterinaria',
    component: CrearVeterinariaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'editar-veterinaria/:id',
    component: EditarVeterinariaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'eliminar-veterinaria/:id',
    component: EliminarVeterinariaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'buscar-veterinaria',
    component: BuscarVeterinariaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'listar-veterinarias',
    component: BuscarVeterinariaComponent,
    canActivate: [ValidadorSesionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }

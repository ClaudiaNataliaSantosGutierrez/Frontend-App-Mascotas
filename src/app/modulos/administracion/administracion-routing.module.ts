import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    component: CrearPersonaComponent
  },
  {
    path: 'editar-persona',
    component: EditarPersonaComponent
  },
  {
    path: 'eliminar-persona',
    component: EliminarPersonaComponent
  },
  {
    path: 'buscar-persona',
    component: BuscarPersonaComponent
  },
  //Rutas para Mascotas
  {
    path: "listar-mascotas",
    component: BuscarMascotaComponent
  },
  {
    path: 'crear-mascota',
    component: CrearMascotaComponent
  },
  {
    path: 'editar-mascota/:id',
    component: EditarMascotaComponent
  },
  {
    path: 'eliminar-mascota',
    component: EliminarMascotaComponent
  },
  {
    path: 'buscar-mascota',
    component: BuscarMascotaComponent
  },
  //Rutas para Veterinarios
  {
    path: 'crear-veterinario',
    component: CrearVeterinarioComponent
  },
  {
    path: 'editar-veterinario',
    component: EditarVeterinarioComponent
  },
  {
    path: 'eliminar-veterinario',
    component: EliminarVeterinarioComponent
  },
  {
    path: 'buscar-veterinario',
    component: BuscarVeterinarioComponent
  },
  //Rutas Para Veterinaria
  {
    path: 'crear-veterinaria',
    component: CrearVeterinariaComponent
  },
  {
    path: 'editar-veterinaria',
    component: EditarVeterinariaComponent
  },
  {
    path: 'eliminar-veterinaria',
    component: EliminarVeterinariaComponent
  },
  {
    path: 'buscar-veterinaria',
    component: BuscarVeterinariaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }

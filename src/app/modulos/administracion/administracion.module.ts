import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './personas/editar-persona/editar-persona.component';
import { EliminarPersonaComponent } from './personas/eliminar-persona/eliminar-persona.component';
import { BuscarPersonaComponent } from './personas/buscar-persona/buscar-persona.component';
import { CrearVeterinarioComponent } from './veterinarios/crear-veterinario/crear-veterinario.component';
import { EditarVeterinarioComponent } from './veterinarios/editar-veterinario/editar-veterinario.component';
import { EliminarVeterinarioComponent } from './veterinarios/eliminar-veterinario/eliminar-veterinario.component';
import { BuscarVeterinarioComponent } from './veterinarios/buscar-veterinario/buscar-veterinario.component';
import { CrearMascotaComponent } from './mascotas/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './mascotas/editar-mascota/editar-mascota.component';
import { EliminarMascotaComponent } from './mascotas/eliminar-mascota/eliminar-mascota.component';
import { BuscarMascotaComponent } from './mascotas/buscar-mascota/buscar-mascota.component';
import { CrearVeterinariaComponent } from './veterinarias/crear-veterinaria/crear-veterinaria.component';
import { EditarVeterinariaComponent } from './veterinarias/editar-veterinaria/editar-veterinaria.component';
import { EliminarVeterinariaComponent } from './veterinarias/eliminar-veterinaria/eliminar-veterinaria.component';
import { BuscarVeterinariaComponent } from './veterinarias/buscar-veterinaria/buscar-veterinaria.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearPersonaComponent,
    EditarPersonaComponent,
    EliminarPersonaComponent,
    BuscarPersonaComponent,
    CrearVeterinarioComponent,
    EditarVeterinarioComponent,
    EliminarVeterinarioComponent,
    BuscarVeterinarioComponent,
    CrearMascotaComponent,
    EditarMascotaComponent,
    EliminarMascotaComponent,
    BuscarMascotaComponent,
    CrearVeterinariaComponent,
    EditarVeterinariaComponent,
    EliminarVeterinariaComponent,
    BuscarVeterinariaComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministracionModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitaRoutingModule } from './visita-routing.module';
import { HacerVisitaComponent } from './hacer-visita/hacer-visita.component';
import { EditarVisitaComponent } from './editar-visita/editar-visita.component';
import { EliminarVisitaComponent } from './eliminar-visita/eliminar-visita.component';
import { BuscarVisitaComponent } from './buscar-visita/buscar-visita.component';
import { ListarVisitaComponent } from './listar-visita/listar-visita.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HacerVisitaComponent,
    EditarVisitaComponent,
    EliminarVisitaComponent,
    BuscarVisitaComponent,
    ListarVisitaComponent
  ],
  imports: [
    CommonModule,
    VisitaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class VisitaModule { }

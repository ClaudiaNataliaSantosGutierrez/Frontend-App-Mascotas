import { Component, OnInit } from '@angular/core';
import { ModeloVisita } from 'src/app/modelos/visita.modelo';
import { VisitasService } from 'src/app/servicios/visitas.service';

@Component({
  selector: 'app-buscar-visita',
  templateUrl: './buscar-visita.component.html',
  styleUrls: ['./buscar-visita.component.css']
})
export class BuscarVisitaComponent implements OnInit {
  
  listadoRegistros : ModeloVisita[] = [];
  
  constructor(private visitaServicio : VisitasService) {

  }

  ngOnInit(): void {
  }

  ObtenerListadoVisita() {
    this.visitaServicio.ObtenerRegistros().subscribe(
      (datos:ModeloVisita[])=> {
        this.listadoRegistros= datos;
    })
  }
}

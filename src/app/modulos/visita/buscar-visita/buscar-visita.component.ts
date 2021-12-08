import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModeloCount } from 'src/app/modelos/count.modelo';
import { ModeloVisita } from 'src/app/modelos/visita.modelo';
import { VisitaService } from 'src/app/servicios/visita.service';

@Component({
  selector: 'app-buscar-visita',
  templateUrl: './buscar-visita.component.html',
  styleUrls: ['./buscar-visita.component.css']
})
export class BuscarVisitaComponent implements OnInit {

  //Objetos para traer la lista de Visitas
  listaVisitas: ModeloVisita[] = [];
  cantidadVisitas: ModeloCount;

  constructor(private visitaServicio: VisitaService,
    private route: ActivatedRoute) {
      this.cantidadVisitas = new ModeloCount();
    }

  ngOnInit(): void {
    this.ObtenerListadoVisitas();
    this.ObtenerCantidadVisitas();
  }

  //Trae la lista de visitas
  ObtenerListadoVisitas(){
    this.visitaServicio.ObtenerVisitas().subscribe((datos: ModeloVisita[]) => {
      this.listaVisitas = datos;
    })
  }

  //Trae la cantidad de visitas
  ObtenerCantidadVisitas(){
    this.visitaServicio.ObtenerCantidadVisitas().subscribe((datos: ModeloCount) => {
      this.cantidadVisitas = datos;
    })
  }

}

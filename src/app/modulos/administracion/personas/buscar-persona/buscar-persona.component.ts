import { Component, OnInit } from '@angular/core';
import { ModeloCount } from 'src/app/modelos/count.modelo';
import { ModeloPersona } from 'src/app/modelos/persona.modelo';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-buscar-persona',
  templateUrl: './buscar-persona.component.html',
  styleUrls: ['./buscar-persona.component.css']
})
export class BuscarPersonaComponent implements OnInit {

  //Objetos para traer la lista de personas y la cantidad de personas
  listaPersonas: ModeloPersona[] = [];
  cantidadPersonas: ModeloCount;

  constructor(private personaServicio: PersonaService) {
    this.cantidadPersonas = new ModeloCount();
   }

  ngOnInit(): void {
    this.ObtenerListadoPersonas();
    this.ObtenerCantidadPersonas();
  }

  //Trae la lista de personas
  ObtenerListadoPersonas(){
    this.personaServicio.ObtenerPersonas().subscribe((datos: ModeloPersona[]) => {
      this.listaPersonas = datos;
    })
  }

  //Trae la cantidad de personas
  ObtenerCantidadPersonas(){
    this.personaServicio.ObtenerCantidadPersonas().subscribe((datos: ModeloCount) => {
      this.cantidadPersonas = datos;
    })
  }

}

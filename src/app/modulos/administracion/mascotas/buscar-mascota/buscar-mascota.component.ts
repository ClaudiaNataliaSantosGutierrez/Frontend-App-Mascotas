import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModeloCount } from 'src/app/modelos/count.modelo';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { ModeloPersona } from 'src/app/modelos/persona.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-buscar-mascota',
  templateUrl: './buscar-mascota.component.html',
  styleUrls: ['./buscar-mascota.component.css']
})
export class BuscarMascotaComponent implements OnInit {

  //Objetos para traer la lista de mascotas y la cantidad
  listaMascotas: ModeloMascota[] = [];
  listaPersonas: ModeloPersona[] = [];
  cantidadMascotas: ModeloCount;

  constructor(private mascotaServicio: MascotaService,
    private personaServicio: PersonaService,
    private route: ActivatedRoute) {
      this.cantidadMascotas = new ModeloCount();
  }

  ngOnInit(): void {
    this.ObtenerListadoMascotas();
    this.ObtenerCantidadMascotas();
    this.ObtenerListadoPersonas();
  }

  //Trae la lista de mascotas
  ObtenerListadoMascotas(){
    this.mascotaServicio.ObtenerMascotas().subscribe((datos: ModeloMascota[]) => {
      this.listaMascotas = datos;
    })
  }

  //Trae la cantidad de mascotas
  ObtenerCantidadMascotas(){
    this.mascotaServicio.ObtenerCantidadMascotas().subscribe((datos: ModeloCount) => {
      this.cantidadMascotas = datos;
    })
  }

  //Trae la lista de personas
  ObtenerListadoPersonas(){
    this.personaServicio.ObtenerPersonas().subscribe((datos: ModeloPersona[]) => {
      this.listaPersonas = datos;
    })
  }

}

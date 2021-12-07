import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModeloCount } from 'src/app/modelos/count.modelo';
import { ModeloVeterinaria } from 'src/app/modelos/veterinaria.modelo';
import { VeterinariaService } from 'src/app/servicios/veterinaria.service';

@Component({
  selector: 'app-buscar-veterinaria',
  templateUrl: './buscar-veterinaria.component.html',
  styleUrls: ['./buscar-veterinaria.component.css']
})
export class BuscarVeterinariaComponent implements OnInit {

  //objeto para traer la lista de Veterinarias y cantidades
  listaVeterinarias: ModeloVeterinaria[] = [];
  cantidadVeterinarias: ModeloCount;

  constructor(private veterinariaServicio: VeterinariaService,
    private route: ActivatedRoute) {
      this.cantidadVeterinarias = new ModeloCount();
    }

  ngOnInit(): void {
    this.ObtenerListadoVeterinarias();
    this.ObtenerCantidadVeterinarias();
  }

  //Trae la lista de personas
  ObtenerListadoVeterinarias(){
    this.veterinariaServicio.ObtenerVeterinarias().subscribe((datos: ModeloVeterinaria[]) => {
      this.listaVeterinarias = datos;
    })
  }

  //Trae la cantidad de personas
  ObtenerCantidadVeterinarias(){
    this.veterinariaServicio.ObtenerCantidadVeterinarias().subscribe((datos: ModeloCount) => {
      this.cantidadVeterinarias = datos;
    })
  }

}

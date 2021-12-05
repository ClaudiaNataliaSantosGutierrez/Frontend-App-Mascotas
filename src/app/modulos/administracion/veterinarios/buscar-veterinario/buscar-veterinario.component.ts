import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModeloCount } from 'src/app/modelos/count.modelo';
import { ModeloVeterinario } from 'src/app/modelos/veterinario.modelo';
import { VeterinarioService } from 'src/app/servicios/veterinario.service';

@Component({
  selector: 'app-buscar-veterinario',
  templateUrl: './buscar-veterinario.component.html',
  styleUrls: ['./buscar-veterinario.component.css']
})
export class BuscarVeterinarioComponent implements OnInit {

  //Objetos para traer la lista de veterinarios y cantidad de registros
  listaVeterinarios: ModeloVeterinario[] = [];
  cantidadVeterinarios: ModeloCount;

  constructor(private veterinarioServicio: VeterinarioService,
    private route: ActivatedRoute) {
      this.cantidadVeterinarios = new ModeloCount();
  }

  ngOnInit(): void {
    this.ObtenerListadoVeterinarios();
    this.ObtenerCantidadVeterinarios();
  }

  //Metodo para traer la lista de veterinarios
  ObtenerListadoVeterinarios(){
    this.veterinarioServicio.ObtenerVeterinarios().subscribe((datos: ModeloVeterinario[]) => {
      this.listaVeterinarios = datos;
    })
  }

  //Metodo para traer la cantidad de registros
  ObtenerCantidadVeterinarios(){
    this.veterinarioServicio.ObtenerCantidadVeterinarios().subscribe((datos: ModeloCount) => {
      this.cantidadVeterinarios = datos;
    })
  }

}

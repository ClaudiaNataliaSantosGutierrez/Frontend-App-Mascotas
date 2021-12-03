import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModeloLogin } from 'src/app/modelos/login.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

  //Le indica a los items del menu que no hay nadie logueado
  //y por tanto no muestra opciones
  seInicioSesion: boolean = false;

  //Se realiza una subscripcion al servicio de seguridad
  subs: Subscription = new Subscription();

  constructor(private seguridadServicio: SeguridadService) { }

  ngOnInit(): void {
    this.subs = this.seguridadServicio.ObstenerDatosUsuarioEnSesion().subscribe((datos:ModeloLogin) =>{
      this.seInicioSesion = datos.estaIdentificado;
    });
  }
  
}

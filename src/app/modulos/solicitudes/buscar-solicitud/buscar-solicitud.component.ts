import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModeloCount } from 'src/app/modelos/count.modelo';
import { ModeloSolicitud } from 'src/app/modelos/solicitud.modelo';
import { SolicitudService } from 'src/app/servicios/solicitud.service';

@Component({
  selector: 'app-buscar-solicitud',
  templateUrl: './buscar-solicitud.component.html',
  styleUrls: ['./buscar-solicitud.component.css']
})
export class BuscarSolicitudComponent implements OnInit {

  //Objetos para traer la lista de solicitudes
  listaSolicitudes: ModeloSolicitud[] = [];
  cantidadSolicitudes: ModeloCount;

  constructor(private solicitudServicio: SolicitudService,
    private route: ActivatedRoute) {
      this.cantidadSolicitudes = new ModeloCount();
  }

  ngOnInit(): void {
    this.ObtenerListadoSolicitudes();
    this.ObtenerCantidadSolicitudes();
  }

  //Trae la lista de solicitudes
  ObtenerListadoSolicitudes(){
    this.solicitudServicio.ObtenerSolicitudes().subscribe((datos: ModeloSolicitud[]) => {
      this.listaSolicitudes = datos;
    })
  }

  //Trae la cantidad de solicitudes
  ObtenerCantidadSolicitudes(){
    this.solicitudServicio.ObtenerCantidadSolicitudes().subscribe((datos: ModeloCount) => {
      this.cantidadSolicitudes = datos;
    })
  }

}

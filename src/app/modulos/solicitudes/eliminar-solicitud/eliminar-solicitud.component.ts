import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SolicitudService } from 'src/app/servicios/solicitud.service';

@Component({
  selector: 'app-eliminar-solicitud',
  templateUrl: './eliminar-solicitud.component.html',
  styleUrls: ['./eliminar-solicitud.component.css']
})
export class EliminarSolicitudComponent implements OnInit {

  id: String = "";

  constructor(private solicitudServicio: SolicitudService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.EliminarSolicitud(this.id);
  }

  //Eliminar Solicitud de Atención
  EliminarSolicitud(id: String) {
    this.solicitudServicio.EliminarSolicitud(id).subscribe(() => {
      alert("Solicitud ELIMINADA");
      this.router.navigate(['/solicitudes/listar-solicitudes']);
    }, (error: any) => {
      alert("Error al ELIMINAR la Solicitud");
    })
  }

}

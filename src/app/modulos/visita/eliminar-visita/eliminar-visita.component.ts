import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VisitaService } from 'src/app/servicios/visita.service';

@Component({
  selector: 'app-eliminar-visita',
  templateUrl: './eliminar-visita.component.html',
  styleUrls: ['./eliminar-visita.component.css']
})
export class EliminarVisitaComponent implements OnInit {

  id: String = "";

  constructor(private visitaServicio: VisitaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.EliminarVisita(this.id);
  }

  //Eliminar Solicitud de Atención
  EliminarVisita(id: String) {
    this.visitaServicio.EliminarVisita(id).subscribe(() => {
      alert("Visita ELIMINADA");
      this.router.navigate(['/visita/listar-visitas']);
    }, (error: any) => {
      alert("Error al ELIMINAR la Visita");
    })
  }

}

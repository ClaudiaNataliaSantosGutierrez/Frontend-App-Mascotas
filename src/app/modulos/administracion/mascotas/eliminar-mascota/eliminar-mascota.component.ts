import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotaService } from 'src/app/servicios/mascota.service';

@Component({
  selector: 'app-eliminar-mascota',
  templateUrl: './eliminar-mascota.component.html',
  styleUrls: ['./eliminar-mascota.component.css']
})
export class EliminarMascotaComponent implements OnInit {

  id: String = "";

  constructor(private mascotaServicio: MascotaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.EliminarMascota(this.id);
  }

  //Eliminar Mascota
  EliminarMascota(id: String){
    this.mascotaServicio.EliminarMascota(id).subscribe(() => {
      alert("Mascota ELIMINADA");
      this.router.navigate(['/administracion/listar-mascotas']);
    }, (error: any) => {
      alert("Error al ELIMINAR mascota");
    })
  }

}

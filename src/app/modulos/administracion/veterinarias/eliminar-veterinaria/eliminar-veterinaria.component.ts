import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VeterinariaService } from 'src/app/servicios/veterinaria.service';

@Component({
  selector: 'app-eliminar-veterinaria',
  templateUrl: './eliminar-veterinaria.component.html',
  styleUrls: ['./eliminar-veterinaria.component.css']
})
export class EliminarVeterinariaComponent implements OnInit {

  id: String = "";
  constructor(private veterinariaServicio: VeterinariaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.EliminarVeterinaria(this.id);
  }

  //Eliminar Veterinaria
  EliminarVeterinaria(id: String){
    this.veterinariaServicio.EliminarVeterinaria(id).subscribe(() => {
      alert("Veterinaria ELIMINADA");
      this.router.navigate(['/administracion/listar-veterinarias']);
    }, (error: any) => {
      alert("Error al ELIMINAR veterinaria");
    })
  }

}

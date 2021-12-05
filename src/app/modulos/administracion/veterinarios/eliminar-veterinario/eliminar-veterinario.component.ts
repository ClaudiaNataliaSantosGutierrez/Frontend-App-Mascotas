import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VeterinarioService } from 'src/app/servicios/veterinario.service';

@Component({
  selector: 'app-eliminar-veterinario',
  templateUrl: './eliminar-veterinario.component.html',
  styleUrls: ['./eliminar-veterinario.component.css']
})
export class EliminarVeterinarioComponent implements OnInit {

  id: String = "";

  constructor(private veterinarioServicio: VeterinarioService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.EliminarVeterinario(this.id);
  }

  //Eliminar Persona
  EliminarVeterinario(id: String){
    this.veterinarioServicio.EliminarVeterinario(id).subscribe(() => {
      alert("Veterinario ELIMINADO");
      this.router.navigate(['/administracion/listar-veterinarios']);
    }, (error: any) => {
      alert("Error al ELIMINAR veterinario");
    })
  }

}

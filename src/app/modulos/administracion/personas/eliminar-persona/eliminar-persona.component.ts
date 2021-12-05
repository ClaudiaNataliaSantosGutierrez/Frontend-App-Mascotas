import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-eliminar-persona',
  templateUrl: './eliminar-persona.component.html',
  styleUrls: ['./eliminar-persona.component.css']
})
export class EliminarPersonaComponent implements OnInit {

  id: String = "";

  constructor(private personaServicio: PersonaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.EliminarPersona(this.id);
  }

  //Eliminar Persona
  EliminarPersona(id: String){
    this.personaServicio.EliminarPersona(id).subscribe(() => {
      alert("Persona ELIMINADA");
      this.router.navigate(['/administracion/listar-personas']);
    }, (error: any) => {
      alert("Error al ELIMINAR persona");
    })
  }

}

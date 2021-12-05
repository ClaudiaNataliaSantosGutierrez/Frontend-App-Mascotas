import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloPersona } from 'src/app/modelos/persona.modelo';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit {

  id: String = "";
  fgValidador: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],
    'correo': ['', [Validators.required, Validators.email]],
    'celular': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
    'identificacion': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, 
    private personaServicio: PersonaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    //Llamar el ID de la persona en el momento de dar click en editar
    this.id = this.route.snapshot.params['id'];
    //Luego se debe buscar la persona con base en el ID
    this.BuscarPersona();
  }

  BuscarPersona(){
    this.personaServicio.ObtenerPersonaPorId(this.id).subscribe((datos: ModeloPersona) => {
      this.fgValidador.controls['id'].setValue(datos.id);
      this.fgValidador.controls['nombres'].setValue(datos.nombres);
      this.fgValidador.controls['apellidos'].setValue(datos.apellidos);
      this.fgValidador.controls['correo'].setValue(datos.correo);
      this.fgValidador.controls['celular'].setValue(datos.celular);
      this.fgValidador.controls['direccion'].setValue(datos.direccion);
      this.fgValidador.controls['identificacion'].setValue(datos.identificacion);
    });
  }

  EditarPersona(){
    let nombres = this.fgValidador.controls['nombres'].value;
    let apellidos = this.fgValidador.controls['apellidos'].value;
    let correo = this.fgValidador.controls['correo'].value;
    let celular = this.fgValidador.controls['celular'].value;
    let direccion = this.fgValidador.controls['direccion'].value;
    let identificacion = this.fgValidador.controls['identificacion'].value;
    let p = new ModeloPersona();
    p.nombres = nombres;
    p.apellidos = apellidos;
    p.correo = correo;
    p.celular = celular;
    p.direccion = direccion;
    p.identificacion = identificacion;
    p.id = this.id;
    this.personaServicio.ActualizarPersona(p).subscribe((datos: ModeloPersona) => {
      alert("Persona actualizada con exito");
      this.router.navigate(['/administracion/listar-personas']);
    }, (error: any) => {
      alert("Error al actualizar persona");
    })

  }

}

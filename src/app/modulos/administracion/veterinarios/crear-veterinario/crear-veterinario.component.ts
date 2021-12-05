import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloVeterinario } from 'src/app/modelos/veterinario.modelo';
import { VeterinarioService } from 'src/app/servicios/veterinario.service';

@Component({
  selector: 'app-crear-veterinario',
  templateUrl: './crear-veterinario.component.html',
  styleUrls: ['./crear-veterinario.component.css']
})
export class CrearVeterinarioComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],
    'correo': ['', [Validators.required, Validators.email]],
    'celular': ['', [Validators.required]],
    'especialidad': ['', [Validators.required]],
    'licencia': ['', [Validators.required]],
    'identificacion': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private veterinarioServicio: VeterinarioService,
    private router: Router) { }

  ngOnInit(): void {
  }

  GuardarVeterinario(){
    let nombres = this.fgValidador.controls['nombres'].value;
    let apellidos = this.fgValidador.controls['apellidos'].value;
    let correo = this.fgValidador.controls['correo'].value;
    let celular = this.fgValidador.controls['celular'].value;
    let especialidad = this.fgValidador.controls['especialidad'].value;
    let licencia = this.fgValidador.controls['licencia'].value;
    let identificacion = this.fgValidador.controls['identificacion'].value;
    let p = new ModeloVeterinario();
    p.nombres = nombres;
    p.apellidos = apellidos;
    p.correo = correo;
    p.celular = celular;
    p.especialidad = especialidad;
    p.licencia = licencia;
    p.identificacion = identificacion;
    this.veterinarioServicio.CrearVeterinario(p).subscribe((datos: ModeloVeterinario) => {
      alert("Veterinario creado con exito");
      this.router.navigate(['/administracion/listar-veterinarios']);
    }, (error: any) => {
      alert("Error al crear el veterinario");
    })

  }


}

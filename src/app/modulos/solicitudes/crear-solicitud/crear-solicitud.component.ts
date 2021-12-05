import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloPersona } from 'src/app/modelos/persona.modelo';
import { ModeloSolicitud } from 'src/app/modelos/solicitud.modelo';
import { ModeloVeterinario } from 'src/app/modelos/veterinario.modelo';
import { PersonaService } from 'src/app/servicios/persona.service';
import { SolicitudService } from 'src/app/servicios/solicitud.service';
import { VeterinarioService } from 'src/app/servicios/veterinario.service';

@Component({
  selector: 'app-crear-solicitud',
  templateUrl: './crear-solicitud.component.html',
  styleUrls: ['./crear-solicitud.component.css']
})
export class CrearSolicitudComponent implements OnInit {

  //Objetos para traer la lista de personas y la cantidad de personas
  listaPersonas: ModeloPersona[] = [];
  listaVeterinarios: ModeloVeterinario[] = [];

  fgValidador: FormGroup = this.fb.group({
    'fecha': ['', [Validators.required]],
    'detalle': ['', [Validators.required]],
    'personaId': ['', [Validators.required, Validators.email]],
    'veterinarioId': ['', [Validators.required]],
    'mascotaId': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private solicitudServicio: SolicitudService,
    private personaServicio: PersonaService,
    private veterinarioServicio: VeterinarioService,
    private router: Router) { }

  ngOnInit(): void {
    this.ObtenerListadoPersonas();
    this.ObtenerListadoVeterinarios();
  }

  GuardarSolicitud(){
    let fecha = this.fgValidador.controls['fecha'].value;
    let detalle = this.fgValidador.controls['detalle'].value;
    let personaId = this.fgValidador.controls['personaId'].value;
    let veterinarioId = this.fgValidador.controls['veterinarioId'].value;
    let mascotaId = this.fgValidador.controls['mascotaId'].value;
    let s = new ModeloSolicitud();
    s.fecha = fecha;
    s.detalle = detalle;
    s.personaId = personaId;
    s.veterinarioId = veterinarioId;
    s.mascotaId = mascotaId;
    this.solicitudServicio.CrearSolicitud(s).subscribe((datos: ModeloSolicitud) => {
      alert("Solicitud de Atención creada con exito");
      this.router.navigate(['/solicitudes/listar-solicitudes']);
    }, (error: any) => {
      alert("Error al crear la nueva Solicitud");
    })

  }

  //Trae la lista de personas
  ObtenerListadoPersonas(){
    this.personaServicio.ObtenerPersonas().subscribe((datos: ModeloPersona[]) => {
      this.listaPersonas = datos;
    })
  }

  //Metodo para traer la lista de veterinarios
  ObtenerListadoVeterinarios(){
    this.veterinarioServicio.ObtenerVeterinarios().subscribe((datos: ModeloVeterinario[]) => {
      this.listaVeterinarios = datos;
    })
  }

}

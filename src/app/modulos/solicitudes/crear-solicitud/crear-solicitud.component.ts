import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { ModeloPersona } from 'src/app/modelos/persona.modelo';
import { ModeloSolicitud } from 'src/app/modelos/solicitud.modelo';
import { ModeloVeterinario } from 'src/app/modelos/veterinario.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';
import { PersonaService } from 'src/app/servicios/persona.service';
import { SolicitudService } from 'src/app/servicios/solicitud.service';
import { VeterinarioService } from 'src/app/servicios/veterinario.service';
import * as moment from 'moment';

@Component({
  selector: 'app-crear-solicitud',
  templateUrl: './crear-solicitud.component.html',
  styleUrls: ['./crear-solicitud.component.css']
})
export class CrearSolicitudComponent implements OnInit {

  //Objetos para traer la lista de personas y la cantidad de personas
  listaMascotas: ModeloMascota[] = [];
  listaPersonas: ModeloPersona[] = [];
  listaVeterinarios: ModeloVeterinario[] = [];

  fgValidador: FormGroup = this.fb.group({
    'fecha': ['', [Validators.required]],
    'detalle': ['', [Validators.required]],
    'personaId': ['', [Validators.required]],
    'veterinarioId': ['', [Validators.required]],
    'mascotaId': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private solicitudServicio: SolicitudService,
    private mascotaServicio: MascotaService,
    private personaServicio: PersonaService,
    private veterinarioServicio: VeterinarioService,
    private router: Router) { }

  ngOnInit(): void {
    this.ObtenerListadoPersonas();
    this.ObtenerListadoVeterinarios();
    this.ObtenerListadoMascotas();
  }

  GuardarSolicitud(){
    let fecha = this.fgValidador.controls['fecha'].value;
    //Conversion de Fecha para que quede en formato MongoDB ISO8601
    var fecha1 = new Date(fecha);
    var fecha2 = moment(fecha1);
    var fecha3 = fecha2.toISOString();
    let detalle = this.fgValidador.controls['detalle'].value;
    let personaId = this.fgValidador.controls['personaId'].value;
    let veterinarioId = this.fgValidador.controls['veterinarioId'].value;
    let mascotaId = this.fgValidador.controls['mascotaId'].value;
    let s = new ModeloSolicitud();
    s.fecha = fecha3;
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

  //Metodo para traer la lista de mascota
  ObtenerListadoMascotas(){
    this.mascotaServicio.ObtenerMascotas().subscribe((datos: ModeloMascota[]) => {
      this.listaMascotas = datos;
    })
  }

}

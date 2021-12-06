import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  selector: 'app-editar-solicitud',
  templateUrl: './editar-solicitud.component.html',
  styleUrls: ['./editar-solicitud.component.css']
})
export class EditarSolicitudComponent implements OnInit {

  id: String = "";
  idPersona: String = "";
  idVeterinario: String = "";
  idMascota: String = "";
  listaPersonas: ModeloPersona[] = [];
  listaVeterinarios: ModeloVeterinario[] = [];
  listaMascotas: ModeloMascota[] = [];
  fgValidador: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
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
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    //Llamar el ID de la persona en el momento de dar click en editar
    this.id = this.route.snapshot.params['id'];
    //Luego se debe buscar la persona con base en el ID
    this.BuscarSolicitud();
    this.BuscarMascota();
    this.BuscarPersona();
    this.BuscarVeterinario();
  }

  BuscarSolicitud(){
    this.solicitudServicio.ObtenerSolicitudPorId(this.id).subscribe((datos: ModeloSolicitud) => {
      this.fgValidador.controls['id'].setValue(datos.id);
      //Se transforma la fecha de formato MongoDB ISO8601 a formato Date para mostrar en el input
      var fecha1 = datos.fecha?.toString();
      var fecha2 = moment(fecha1).format('YYYY-MM-DD');
      this.fgValidador.controls['fecha'].setValue(fecha2);
      this.fgValidador.controls['detalle'].setValue(datos.detalle);
      this.fgValidador.controls['personaId'].setValue(datos.personaId);
      this.fgValidador.controls['veterinarioId'].setValue(datos.veterinarioId);
      this.fgValidador.controls['mascotaId'].setValue(datos.mascotaId);
      //Se busca la persona con base en el ID para el Select de Propietario
      datos.personaId = this.idPersona;
      datos.mascotaId = this.idMascota;
      datos.veterinarioId = this.idVeterinario;
    });
  }

  BuscarPersona(){
    this.personaServicio.ObtenerPersonaPorIdLista(this.idPersona).subscribe((datos: ModeloPersona[]) => {
      this.listaPersonas = datos;
    });
  }

  BuscarMascota(){
    this.mascotaServicio.ObtenerMascotaPorIdLista(this.idMascota).subscribe((datos: ModeloMascota[]) => {
      this.listaMascotas = datos;
    });
  }

  BuscarVeterinario(){
    this.veterinarioServicio.ObtenerVeterinarioPorIdLista(this.idVeterinario).subscribe((datos: ModeloVeterinario[]) => {
      this.listaVeterinarios = datos;
    });
  }

  EditarSolicitud(){
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
    s.id = this.id;
    this.solicitudServicio.ActualizarSolicitud(s).subscribe((datos: ModeloSolicitud) => {
      alert("Solicitud de Atención actualizada con exito");
      this.router.navigate(['/solicitudes/listar-solicitudes']);
    }, (error: any) => {
      alert("Error al actualizar la Solicitud");
    })

  }

}

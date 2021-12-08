import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloSolicitud } from 'src/app/modelos/solicitud.modelo';
import { ModeloVeterinario } from 'src/app/modelos/veterinario.modelo';
import { SolicitudService } from 'src/app/servicios/solicitud.service';
import { VeterinarioService } from 'src/app/servicios/veterinario.service';
import { VisitaService } from 'src/app/servicios/visita.service';
import * as moment from 'moment';
import { ModeloVisita } from 'src/app/modelos/visita.modelo';

@Component({
  selector: 'app-hacer-visita',
  templateUrl: './hacer-visita.component.html',
  styleUrls: ['./hacer-visita.component.css']
})
export class HacerVisitaComponent implements OnInit {

  idMascota: string = "";
  //Objetos para traer las listas
  listaVeterinarios: ModeloVeterinario[] = [];
  listaSolicitudes: ModeloSolicitud[] = [];

  fgValidador: FormGroup = this.fb.group({
    'fecha': ['', [Validators.required]],
    'temperatura': ['', [Validators.required]],
    'peso': ['', [Validators.required]],
    'veterinarioId': ['', [Validators.required]],
    'frecCardiaca': ['', [Validators.required]],
    'frecRespiratoria': ['', [Validators.required]],
    'observaciones': ['', [Validators.required]],
    'medicinas': ['', [Validators.required]],
    'estado': ['', [Validators.required]],
    'solicitudId': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private veterinarioServicio: VeterinarioService,
    private solicitudServicio: SolicitudService,
    private visitaServicio: VisitaService,
    private router: Router) { }

  ngOnInit(): void {
    this.ObtenerListadoSolicitudes();
    this.ObtenerListadoVeterinarios();
  }

  GuardarVisita(){
    let fecha = this.fgValidador.controls['fecha'].value;
    //Conversion de Fecha para que quede en formato MongoDB ISO8601
    var fecha1 = new Date(fecha);
    var fecha2 = moment(fecha1);
    var fecha3 = fecha2.toISOString();
    let temperatura = this.fgValidador.controls['temperatura'].value;
    let peso = this.fgValidador.controls['peso'].value;
    let veterinarioId = this.fgValidador.controls['veterinarioId'].value;
    let frecCardiaca = this.fgValidador.controls['frecCardiaca'].value;
    let frecRespiratoria = this.fgValidador.controls['frecRespiratoria'].value;
    let observaciones = this.fgValidador.controls['observaciones'].value;
    let medicinas = this.fgValidador.controls['medicinas'].value;
    let estado = this.fgValidador.controls['estado'].value;
    let solicitudId = this.fgValidador.controls['solicitudId'].value;
    let v = new ModeloVisita();
    v.fecha = fecha3;
    v.temperatura = temperatura;
    v.peso = peso;
    v.veterinarioId = veterinarioId;
    v.frecCardiaca = frecCardiaca;
    v.frecRespiratoria = frecRespiratoria;
    v.observaciones = observaciones;
    v.medicinas = medicinas;
    v.estado = estado;
    v.solicitudId = solicitudId;
    this.visitaServicio.CrearVisita(v).subscribe((datos: ModeloVisita) => {
      alert("Visita ha sido realizada con exito");
      this.router.navigate(['/visita/listar-visitas']);
    }, (error: any) => {
      alert("Error al crear la nueva Visita");
    })

  }

  //Metodo para traer la lista de veterinarios
  ObtenerListadoVeterinarios(){
    this.veterinarioServicio.ObtenerVeterinarios().subscribe((datos: ModeloVeterinario[]) => {
      this.listaVeterinarios = datos;
    })
  }

  //Metodo para traer la lista de mascota
  ObtenerListadoSolicitudes(){
    this.solicitudServicio.ObtenerSolicitudes().subscribe((datos: ModeloSolicitud[]) => {
      this.listaSolicitudes = datos;
    })
  }

  

}

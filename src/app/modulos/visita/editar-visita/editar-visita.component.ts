import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloSolicitud } from 'src/app/modelos/solicitud.modelo';
import { ModeloVeterinario } from 'src/app/modelos/veterinario.modelo';
import { ModeloVisita } from 'src/app/modelos/visita.modelo';
import { SolicitudService } from 'src/app/servicios/solicitud.service';
import { VeterinarioService } from 'src/app/servicios/veterinario.service';
import { VisitaService } from 'src/app/servicios/visita.service';
import * as moment from 'moment';

@Component({
  selector: 'app-editar-visita',
  templateUrl: './editar-visita.component.html',
  styleUrls: ['./editar-visita.component.css']
})
export class EditarVisitaComponent implements OnInit {

  id: String = "";
  idSolicitud: String = "";
  idVeterinario: String = "";
  listaSolicitudes: ModeloSolicitud[] = [];
  listaVeterinarios: ModeloVeterinario[] = [];

  fgValidador: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
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
    private solicitudServicio: SolicitudService,
    private veterinarioServicio: VeterinarioService,
    private visitaServicio: VisitaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    //Llamar el ID de la persona en el momento de dar click en editar
    this.id = this.route.snapshot.params['id'];
    //Luego se debe buscar la persona con base en el ID
    this.BuscarVisita();
    this.BuscarSolicitud();
    this.BuscarVeterinario();
  }

  BuscarVisita(){
    this.visitaServicio.ObtenerVisitaPorId(this.id).subscribe((datos: ModeloVisita) => {
      this.fgValidador.controls['id'].setValue(datos.id);
      //Se transforma la fecha de formato MongoDB ISO8601 a formato Date para mostrar en el input
      var fecha1 = datos.fecha?.toString();
      var fecha2 = moment(fecha1).format('YYYY-MM-DD');
      this.fgValidador.controls['fecha'].setValue(fecha2);
      this.fgValidador.controls['temperatura'].setValue(datos.temperatura);
      this.fgValidador.controls['peso'].setValue(datos.peso);
      this.fgValidador.controls['veterinarioId'].setValue(datos.veterinarioId);
      this.fgValidador.controls['frecCardiaca'].setValue(datos.frecCardiaca);
      this.fgValidador.controls['frecRespiratoria'].setValue(datos.frecRespiratoria);
      this.fgValidador.controls['observaciones'].setValue(datos.observaciones);
      this.fgValidador.controls['medicinas'].setValue(datos.medicinas);
      this.fgValidador.controls['estado'].setValue(datos.estado);
      this.fgValidador.controls['solicitudId'].setValue(datos.solicitudId);
      //Se busca la persona con base en el ID para el Select de Propietario
      datos.solicitudId = this.idSolicitud;
      datos.veterinarioId = this.idVeterinario;
    });
  }

  BuscarVeterinario(){
    this.veterinarioServicio.ObtenerVeterinarioPorIdLista(this.idVeterinario).subscribe((datos: ModeloVeterinario[]) => {
      this.listaVeterinarios = datos;
    });
  }

  BuscarSolicitud(){
    this.solicitudServicio.ObtenerSolicitudPorIdLista(this.idSolicitud).subscribe((datos: ModeloSolicitud[]) => {
      this.listaSolicitudes = datos;
    });
  }

  EditarVisita(){
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
    v.id = this.id;
    this.visitaServicio.ActualizarVisita(v).subscribe((datos: ModeloVisita) => {
      alert("Visita ha sido actualizada con exito");
      this.router.navigate(['/visita/listar-visitas']);
    }, (error: any) => {
      alert("Error al actualizar Visita");
    })

  }

}

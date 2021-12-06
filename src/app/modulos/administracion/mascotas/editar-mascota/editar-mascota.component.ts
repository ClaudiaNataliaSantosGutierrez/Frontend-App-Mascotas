import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { ModeloPersona } from 'src/app/modelos/persona.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';
import { PersonaService } from 'src/app/servicios/persona.service';
import * as moment from 'moment';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-editar-mascota',
  templateUrl: './editar-mascota.component.html',
  styleUrls: ['./editar-mascota.component.css']
})
export class EditarMascotaComponent implements OnInit {

  id: String = "";
  idPersona: String = "";
  listaPersonas: ModeloPersona[] = [];
  fgValidador: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'tipo': ['', [Validators.required]],
    'fechaNacimiento': ['', [Validators.required]],
    'raza': ['', [Validators.required]],
    'estatura': ['', [Validators.required]],
    'colorPelaje': ['', [Validators.required]],
    'colorOjos': ['', [Validators.required]],
    'personaId': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private mascotaServicio: MascotaService, 
    private personaServicio: PersonaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    //Llamar el ID de la persona en el momento de dar click en editar
    this.id = this.route.snapshot.params['id'];
    //Luego se debe buscar la persona con base en el ID
    this.BuscarMascota();
    this.BuscarPersona();
  }

  BuscarMascota(){
    this.mascotaServicio.ObtenerMascotaPorId(this.id).subscribe((datos: ModeloMascota) => {
      this.fgValidador.controls['id'].setValue(datos.id);
      this.fgValidador.controls['nombre'].setValue(datos.nombre);
      this.fgValidador.controls['tipo'].setValue(datos.tipo);
      this.fgValidador.controls['raza'].setValue(datos.raza);
      this.fgValidador.controls['estatura'].setValue(datos.estatura);
      this.fgValidador.controls['colorPelaje'].setValue(datos.colorPelaje);
      this.fgValidador.controls['colorOjos'].setValue(datos.colorOjos);
      this.fgValidador.controls['personaId'].setValue(datos.personaId);
      //Se busca la persona con base en el ID para el Select de Propietario
      datos.personaId = this.idPersona;
      //Se transforma la fecha de formato MongoDB ISO8601 a formato Date para mostrar en el input
      var fecha1 = datos.fechaNacimiento?.toString();
      var fecha2 = moment(fecha1).format('YYYY-MM-DD');
      this.fgValidador.controls['fechaNacimiento'].setValue(fecha2);
    });
  }
  
  BuscarPersona(){
    this.personaServicio.ObtenerPersonaPorIdLista(this.idPersona).subscribe((datos: ModeloPersona[]) => {
      this.listaPersonas = datos;
    });
  }

  EditarMascota(){
    let nombre = this.fgValidador.controls['nombre'].value;
    let tipo = this.fgValidador.controls['tipo'].value;
    let fechaNacimiento = this.fgValidador.controls['fechaNacimiento'].value;
    //Conversion de Fecha para que quede en formato MongoDB ISO8601
    var fecha1 = new Date(fechaNacimiento);
    var fecha2 = moment(fecha1);
    var fecha3 = fecha2.toISOString();
    let raza = this.fgValidador.controls['raza'].value;
    let estatura = this.fgValidador.controls['estatura'].value;
    let colorPelaje = this.fgValidador.controls['colorPelaje'].value;
    let colorOjos = this.fgValidador.controls['colorOjos'].value;
    let personaId = this.fgValidador.controls['personaId'].value;
    let m = new ModeloMascota();
    m.nombre = nombre;
    m.tipo = tipo;
    m.fechaNacimiento = fecha3;
    m.raza = raza;
    m.estatura = estatura;
    m.colorPelaje = colorPelaje;
    m.colorOjos = colorOjos;
    m.personaId = personaId;
    m.id = this.id;
    this.mascotaServicio.ActualizarMascota(m).subscribe((datos: ModeloMascota) => {
      alert("Mascota actualizada con exito");
      this.router.navigate(['/administracion/listar-mascotas']);
    }, (error: any) => {
      alert("Error al actualizar mascota");
    })

  }

}

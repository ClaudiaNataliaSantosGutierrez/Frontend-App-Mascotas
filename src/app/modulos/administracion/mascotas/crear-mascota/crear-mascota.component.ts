import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { ModeloPersona } from 'src/app/modelos/persona.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';
import { PersonaService } from 'src/app/servicios/persona.service';
import * as moment from 'moment';

@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrls: ['./crear-mascota.component.css']
})
export class CrearMascotaComponent implements OnInit {

  listaPersonas: ModeloPersona[] = [];

  fgValidador: FormGroup = this.fb.group({
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
    private router: Router) {}

  ngOnInit(): void {
    this.ObtenerListadoPersonas();
  }

  GuardarMascota(){
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
    this.mascotaServicio.CrearMascota(m).subscribe((datos: ModeloMascota) => {
      alert("Mascota creada con exito");
      this.router.navigate(['/administracion/listar-mascotas']);
    }, (error: any) => {
      alert("Error al crear mascota");
    })

  }

  //Trae la lista de personas
  ObtenerListadoPersonas(){
    this.personaServicio.ObtenerPersonas().subscribe((datos: ModeloPersona[]) => {
      this.listaPersonas = datos;
    })
  }

}

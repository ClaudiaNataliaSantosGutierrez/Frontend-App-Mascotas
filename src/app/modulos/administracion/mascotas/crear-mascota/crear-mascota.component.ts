import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';

@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrls: ['./crear-mascota.component.css']
})
export class CrearMascotaComponent implements OnInit {
  
  fgValidador: FormGroup = this.fb.group({
    'nombre': ['', [Validators.required]],
    'tipo': ['', [Validators.required]],
    'raza': ['', [Validators.required]],
    'colorPelaje': ['', [Validators.required]],
    'colorOjos': ['', [Validators.required]],
    'estatura': ['',[Validators.required]],
    'fechaNacimiento': ['', [Validators.required]]
  })
  constructor(private fb: FormBuilder,
    private servicioMascota: MascotaService,
    private router: Router) { }

  ngOnInit(): void {
  }

  GuardarMascota(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let tipo = this.fgValidador.controls["tipo"].value;
    let raza = this.fgValidador.controls["raza"].value;
    let colorPelaje = this.fgValidador.controls["colorPelaje"].value;
    let colorOjos = this.fgValidador.controls["colorOjos"].value;
    let estatura = this.fgValidador.controls["estatura"].value;
    let fechaNacimiento = this.fgValidador.controls["fechaNacimiento"].value;
    let p = new ModeloMascota();
    p.nombre = nombre;
    p.tipo = tipo;
    p.raza = raza;
    p.colorPelaje = colorPelaje;
    p.colorOjos = colorOjos;
    p.estatura = estatura;
    p.fechaNacimiento = fechaNacimiento;
    this.servicioMascota.CrearMascota(p).subscribe((datos: ModeloMascota) => {
      alert("Mascota almacenada correctamente");
      this.router.navigate(["/administracion/listar-mascotas"]);
    }, (error: any) => {
      alert("Error almacenado mascota");
    })
  }

}

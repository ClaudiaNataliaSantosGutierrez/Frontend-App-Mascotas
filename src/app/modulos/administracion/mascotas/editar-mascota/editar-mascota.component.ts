import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';

@Component({
  selector: 'app-editar-mascota',
  templateUrl: './editar-mascota.component.html',
  styleUrls: ['./editar-mascota.component.css']
})
export class EditarMascotaComponent implements OnInit {

  id: string = '';

  fgValidador: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
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
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarMascota();
  }

  BuscarMascota(){
    this.servicioMascota.ObtenerRegistrosPorId(this.id).subscribe((datos: ModeloMascota) => {
      this.fgValidador.controls["id"].setValue(datos.id);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["tipo"].setValue(datos.tipo);
      this.fgValidador.controls["raza"].setValue(datos.raza);
      this.fgValidador.controls["colorPelaje"].setValue(datos.colorPelaje);
      this.fgValidador.controls["colorOjos"].setValue(datos.colorOjos);
      this.fgValidador.controls["fechaNacimiento"].setValue(datos.fechaNacimiento);
    })
  }

  EditarMascota(){
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
    p.id = this.id;
    this.servicioMascota.ActualizarMascota(p).subscribe((datos: ModeloMascota) => {
      alert("Mascota actualizada correctamente");
      this.router.navigate(["/administracion/listar-mascotas"]);
    }, (error: any) => {
      alert("Error actualizando mascota");
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloVeterinaria } from 'src/app/modelos/veterinaria.modelo';
import { VeterinariaService } from 'src/app/servicios/veterinaria.service';

@Component({
  selector: 'app-crear-veterinaria',
  templateUrl: './crear-veterinaria.component.html',
  styleUrls: ['./crear-veterinaria.component.css']
})
export class CrearVeterinariaComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'nombre': ['', [Validators.required]],
    'nit': ['', [Validators.required]],
    'direccion': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private veterinariaServicio: VeterinariaService,
    private router: Router) { }

  ngOnInit(): void {
  }

  GuardarVeterinaria(){
    let nombre = this.fgValidador.controls['nombre'].value;
    let nit = this.fgValidador.controls['nit'].value;
    let direccion = this.fgValidador.controls['direccion'].value;
    let v = new ModeloVeterinaria();
    v.nombre = nombre;
    v.nit = nit;
    v.direccion = direccion;
    this.veterinariaServicio.CrearVeterinaria(v).subscribe((datos: ModeloVeterinaria) => {
      alert("Veterinaria creada con exito");
      this.router.navigate(['/administracion/listar-veterinarias']);
    }, (error: any) => {
      alert("Error al crear veterinaria");
    })

  }

}

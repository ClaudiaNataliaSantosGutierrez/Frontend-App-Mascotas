import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloVeterinaria } from 'src/app/modelos/veterinaria.modelo';
import { VeterinariaService } from 'src/app/servicios/veterinaria.service';

@Component({
  selector: 'app-editar-veterinaria',
  templateUrl: './editar-veterinaria.component.html',
  styleUrls: ['./editar-veterinaria.component.css']
})
export class EditarVeterinariaComponent implements OnInit {

  id: String = "";
  fgValidador: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'nit': ['', [Validators.required]],
    'direccion': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private veterinariaServicio: VeterinariaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    //Llamar el ID de la veterinaria en el momento de dar click en editar
    this.id = this.route.snapshot.params['id'];
    //Luego se debe buscar la veterinaria con base en el ID
    this.BuscarVeterinaria();
  }

  BuscarVeterinaria(){
    this.veterinariaServicio.ObtenerVeterinariaPorId(this.id).subscribe((datos: ModeloVeterinaria) => {
      this.fgValidador.controls['id'].setValue(datos.id);
      this.fgValidador.controls['nombre'].setValue(datos.nombre);
      this.fgValidador.controls['nit'].setValue(datos.nit);
      this.fgValidador.controls['direccion'].setValue(datos.direccion);
    });
  }

  EditarVeterinaria(){
    let nombre = this.fgValidador.controls['nombre'].value;
    let nit = this.fgValidador.controls['nit'].value;
    let direccion = this.fgValidador.controls['direccion'].value;
    let v = new ModeloVeterinaria();
    v.nombre = nombre;
    v.nit = nit;
    v.direccion = direccion;
    v.id = this.id;
    this.veterinariaServicio.ActualizarVeterinaria(v).subscribe((datos: ModeloVeterinaria) => {
      alert("Veterinaria actualizada con exito");
      this.router.navigate(['/administracion/listar-veterinarias']);
    }, (error: any) => {
      alert("Error al actualizar veterinaria");
    })

  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloVeterinaria } from 'src/app/modelos/veterinaria.modelo';
import { ModeloVeterinario } from 'src/app/modelos/veterinario.modelo';
import { VeterinariaService } from 'src/app/servicios/veterinaria.service';
import { VeterinarioService } from 'src/app/servicios/veterinario.service';

@Component({
  selector: 'app-editar-veterinario',
  templateUrl: './editar-veterinario.component.html',
  styleUrls: ['./editar-veterinario.component.css']
})
export class EditarVeterinarioComponent implements OnInit {

  id: String = "";
  idVeterinaria: String = "";
  listaVeterinarias: ModeloVeterinaria[] = [];

  fgValidador: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],
    'correo': ['', [Validators.required, Validators.email]],
    'celular': ['', [Validators.required]],
    'especialidad': ['', [Validators.required]],
    'licencia': ['', [Validators.required]],
    'identificacion': ['', [Validators.required]],
    'veterinariaId': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, 
    private veterinarioServicio: VeterinarioService,
    private veterinariaServicio: VeterinariaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    //Llamar el ID de la persona en el momento de dar click en editar
    this.id = this.route.snapshot.params['id'];
    //Luego se debe buscar la persona con base en el ID
    this.BuscarVeterinario();
    this.BuscarVeterinaria();
  }

  BuscarVeterinario(){
    this.veterinarioServicio.ObtenerVeterinarioPorId(this.id).subscribe((datos: ModeloVeterinario) => {
      this.fgValidador.controls['id'].setValue(datos.id);
      this.fgValidador.controls['nombres'].setValue(datos.nombres);
      this.fgValidador.controls['apellidos'].setValue(datos.apellidos);
      this.fgValidador.controls['correo'].setValue(datos.correo);
      this.fgValidador.controls['celular'].setValue(datos.celular);
      this.fgValidador.controls['especialidad'].setValue(datos.especialidad);
      this.fgValidador.controls['licencia'].setValue(datos.licencia);
      this.fgValidador.controls['identificacion'].setValue(datos.identificacion);
      this.fgValidador.controls['veterinariaId'].setValue(datos.veterinariaId);
      //Se busca la veterinaria en la lista de veterinarias
      datos.veterinariaId = this.idVeterinaria;
    });
  }

  EditarVeterinario(){
    let nombres = this.fgValidador.controls['nombres'].value;
    let apellidos = this.fgValidador.controls['apellidos'].value;
    let correo = this.fgValidador.controls['correo'].value;
    let celular = this.fgValidador.controls['celular'].value;
    let especialidad = this.fgValidador.controls['especialidad'].value;
    let licencia = this.fgValidador.controls['licencia'].value;
    let identificacion = this.fgValidador.controls['identificacion'].value;
    let veterinariaId = this.fgValidador.controls['veterinariaId'].value;
    let v = new ModeloVeterinario();
    v.nombres = nombres;
    v.apellidos = apellidos;
    v.correo = correo;
    v.celular = celular;
    v.especialidad = especialidad;
    v.licencia = licencia;
    v.identificacion = identificacion;
    v.veterinariaId = veterinariaId;
    v.id = this.id;
    this.veterinarioServicio.ActualizarVeterinario(v).subscribe((datos: ModeloVeterinario) => {
      alert("Veterinario actualizado con exito");
      this.router.navigate(['/administracion/listar-veterinarios']);
    }, (error: any) => {
      alert("Error al actualizar veterinario");
    })

  }

  //Metodo para traer la lista de veterinarios
  BuscarVeterinaria(){
    this.veterinariaServicio.ObtenerVeterinariaPorIdLista(this.idVeterinaria).subscribe((datos: ModeloVeterinaria[]) => {
      this.listaVeterinarias = datos;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hacer-visita',
  templateUrl: './hacer-visita.component.html',
  styleUrls: ['./hacer-visita.component.css']
})
export class HacerVisitaComponent implements OnInit {

  formGroupValidador : FormGroup = this.formbuilder.group({
    'fecha':['',[Validators.required]],
    'temperatura' : ['',[Validators.required]],
    'peso' : ['',[Validators.required]],
    'frecCardiaca': ['',[Validators.required]],
    'frecRespiratoria' : ['',[Validators.required]],
    'estado':['',[Validators.required]],
    'observaciones': ['',[Validators.required]],
    'medicinas' : ['',[Validators.required]]

  });

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  
  CrearVisita(){
    let fecha = this.formGroupValidador.controls["fecha"].value;
    let temperature = this.formGroupValidador.controls["temperature"].value;
    let peso = this.formGroupValidador.controls["peso"].value;
    let frecCardiaca = this.formGroupValidador.controls["frecCardiaca"].value;
    let frecRespiratoria = this.formGroupValidador.controls["frecRespiratoria"].value;
    let estado = this.formGroupValidador.controls["estado"].value;
    let observaciones = this.formGroupValidador.controls["observaciones"].value;
    let medicinas = this.formGroupValidador.controls["medicinas"].value;
  }

}

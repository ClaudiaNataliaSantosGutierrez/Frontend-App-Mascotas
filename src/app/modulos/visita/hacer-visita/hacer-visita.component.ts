import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloVisita } from 'src/app/modelos/visita.modelo';
import { VisitasService } from 'src/app/servicios/visitas.service';

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

  constructor(private formbuilder: FormBuilder,
     private servicioVisita:VisitasService,
     private router: Router) { 

     }

  ngOnInit(): void {

  }
  
  GuardarVisita(){
    let fecha = new Date();//
    let temperatura = this.formGroupValidador.controls["temperatura"].value.toString();//2
    let peso = this.formGroupValidador.controls["peso"].value.toString();//3
    let frecCardiaca = this.formGroupValidador.controls["frecCardiaca"].value.toString();//4
    let frecRespiratoria = this.formGroupValidador.controls["frecRespiratoria"].value.toString();//5
    let estado = this.formGroupValidador.controls["estado"].value.toString();//6
    let observaciones = this.formGroupValidador.controls["observaciones"].value.toString();//7
    let medicinas = this.formGroupValidador.controls["medicinas"].value.toString(); //8

    let visita = new ModeloVisita();
    visita.fecha = fecha;
    visita.temperatura= temperatura;
    visita.peso = peso;
    visita.frecCardiaca = frecCardiaca;
    visita.frecRespiratoria= frecRespiratoria;
    visita.estado = estado;
    visita.observaciones= observaciones;
    visita.medicinas = medicinas;
    this.servicioVisita.CrearVisita(visita).subscribe((datos:ModeloVisita) => {
      alert('Funciona bien');
      this.router.navigate(['visita/listar_visita']);
    },(error:any)=>{
      alert('Algo salio mal, Error tipo');
      alert(error);
    }
    
    );
  }

}

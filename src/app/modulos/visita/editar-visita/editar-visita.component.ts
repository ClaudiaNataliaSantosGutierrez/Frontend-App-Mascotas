import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloVisita } from 'src/app/modelos/visita.modelo';
import { VisitasService } from 'src/app/servicios/visitas.service';

@Component({
  selector: 'app-editar-visita',
  templateUrl: './editar-visita.component.html',
  styleUrls: ['./editar-visita.component.css']
})
export class EditarVisitaComponent implements OnInit {
  
  id :string = "";

  formGroupValidador : FormGroup = this.formbuilder.group({
    'id' : ['',[Validators.required]],
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
     private router: Router,private route:ActivatedRoute) { 

     }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.BuscarVisita();
  }
  
  BuscarVisita(){
    this.servicioVisita.ObtenerRegistrosId(this.id).subscribe(
      (datos:ModeloVisita)=>{
        this.formGroupValidador.controls["fecha"].setValue(datos.fecha);//
        this.formGroupValidador.controls["id"].setValue(this.id);//2
        this.formGroupValidador.controls["temperatura"].setValue(datos.temperatura);//2
        this.formGroupValidador.controls["peso"].setValue(datos.peso);//3
        this.formGroupValidador.controls["frecCardiaca"].setValue(datos.frecCardiaca);//4
        this.formGroupValidador.controls["frecRespiratoria"].setValue(datos.frecRespiratoria);//5
        this.formGroupValidador.controls["estado"].setValue(datos.estado);//6
        this.formGroupValidador.controls["observaciones"].setValue(datos.observaciones);//7
        this.formGroupValidador.controls["medicinas"].setValue(datos.medicinas); //8
      }
    );
  }
  EditarVisita(){
    let fecha = new Date();//1       Se debe revisar prque el front da un dato tipo 12-12-2021 y se necesita pasar un date completo mas minutos hora  segundos  
    let temperatura = this.formGroupValidador.controls["temperatura"].value.toString();//2
    let peso = this.formGroupValidador.controls["peso"].value.toString();//3
    let frecCardiaca = this.formGroupValidador.controls["frecCardiaca"].value.toString();//4
    let frecRespiratoria = this.formGroupValidador.controls["frecRespiratoria"].value.toString();//5
    let estado = this.formGroupValidador.controls["estado"].value.toString();//6
    let observaciones = this.formGroupValidador.controls["observaciones"].value.toString();//7
    let medicinas = this.formGroupValidador.controls["medicinas"].value.toString(); //8

    let visita = new ModeloVisita ();
    visita.fecha = fecha;
    visita.temperatura= temperatura;
    visita.peso = peso;
    visita.frecCardiaca = frecCardiaca;
    visita.frecRespiratoria= frecRespiratoria;
    visita.estado = estado;
    visita.observaciones= observaciones;
    visita.medicinas = medicinas;
    visita.id = this.id;
    this.servicioVisita.ActualizarVisita(visita).subscribe((datos:ModeloVisita) => {
      alert('Funciona bien');
      this.router.navigate(['visita/listar_visita']);
    },(error:any)=>{
      alert('Algo salio mal, Error tipo Actualizacion');
      alert(error);
    }
    
    );
  }
}

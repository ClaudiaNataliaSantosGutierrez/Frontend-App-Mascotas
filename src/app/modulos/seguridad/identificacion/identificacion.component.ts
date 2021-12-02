import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import * as cryptoJS from 'crypto-js';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'usuario': ['', [Validators.required, Validators.email]],
    'clave': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService){ }

  ngOnInit(): void {
  }

  IdentificarUsuario(){
    let usuario = this.fgValidador.controls["usuario"].value;
    let clave = this.fgValidador.controls["clave"].value;
    //const claveCifrada = cryptoJS.MD5(clave).toString();
    //console.log(claveCifrada);
    alert(usuario)
    alert(clave)
    //alert(claveCifrada)
    this.servicioSeguridad.login(usuario, clave).subscribe((datos: any) => {
      //OK
      alert("Datos Correctos")
    }, (error: any) => {
      //ERROR
      alert("ERROR: Datos incorrectos")
    });
  }
}

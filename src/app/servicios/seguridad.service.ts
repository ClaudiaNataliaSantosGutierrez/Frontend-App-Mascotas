import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModeloLogin } from '../modelos/login.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  //URL para el Backend
  url = "http://localhost:3000";
  //revisar el comportamiento de la variable de sesion
  datosUsuariosEnSesion = new BehaviorSubject<ModeloLogin>(new ModeloLogin());

  constructor(private http: HttpClient) {
    this.VerificarSesionActual();
  }

  login(usuario: string, clave: string): Observable<ModeloLogin>{
    return this.http.post<ModeloLogin>(`${this.url}/login`, {
      usuario: usuario,
      clave: clave
    },{
      headers: new HttpHeaders({
      
      })
    });
  }

  //Almacenar los datos del token de la sesion del usuario
  AlmacenarSesion(datos: ModeloLogin){
    datos.estaIdentificado = true;
    let stringDatos = JSON.stringify(datos);
    localStorage.setItem('datosSesion', stringDatos);
    this.RefrescarDatosSesion(datos);
  }

  //Sacar informacion de la sesion del local storage del navegador
  ObtenerInformacionSesion(){
    let datosString = localStorage.getItem('datosSesion');
    if (datosString){
      let datos = JSON.parse(datosString);
      return datos;
    }else{
      return null;
    }
  }

  //Eliminar la informacion de la sesion del local storage del navegador
  //Al cerrar sesion
  EliminarInformacionSesion(){
    localStorage.removeItem('datosSesion');
    this.RefrescarDatosSesion(new ModeloLogin());
  }

  //Verificar si en local storage existe un token para saber si hay
  //sesion iniciada
  SeHaIniciadoSesion(){
    let datosString = localStorage.getItem('datosSesion');
    return datosString;
  }

  //Enviar los datos de la sesion iniciada al componente
  VerificarSesionActual(){
    let datos = this.ObtenerInformacionSesion();
    if (datos){
      this.RefrescarDatosSesion(datos);
    }
  }

  //Obtener datos del usuario logueado
  ObstenerDatosUsuarioEnSesion(){
    return this.datosUsuariosEnSesion.asObservable();
  }

  //Actualizar los datos de la sesion en la variable datos para los demas metodos
  RefrescarDatosSesion(datos: ModeloLogin){
    this.datosUsuariosEnSesion.next(datos);
  }

}

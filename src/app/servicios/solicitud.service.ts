import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloCount } from '../modelos/count.modelo';
import { ModeloSolicitud } from '../modelos/solicitud.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  //Servicio del Modelo Solicituds para tomar datos desde la base de datos
  url = 'http://localhost:3000';
  token: String = "";
  //Se llaman los servicios HTTP para el envio de verbos 
  //Se llama servicio de seguridad para obtener el token
  constructor(private http: HttpClient, private seguridadServicio: SeguridadService) {
    this.token = this.seguridadServicio.ObtenerToken();
  }

  //Traer datos de las solicitudes de la base de datos
  ObtenerSolicitudes(): Observable<ModeloSolicitud[]>{
    return this.http.get<ModeloSolicitud[]>(`${this.url}/solicitudes` , {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  //Traer Solicitud por ID con GET y enviando el Token
  ObtenerSolicitudPorId(id: String): Observable<ModeloSolicitud>{
    return this.http.get<ModeloSolicitud>(`${this.url}/solicitudes/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  //Traer la cantidad de solicituds en Base de Datos, el count que no necesita TOKEN
  ObtenerCantidadSolicitudes(): Observable<ModeloCount>{
    return this.http.get<ModeloCount>(`${this.url}/solicitudes/count`);
  }

  //Crear una solicitud nueva enviando el POST
  CrearSolicitud(solicitud: ModeloSolicitud): Observable<ModeloSolicitud>{
    return this.http.post<ModeloSolicitud>(`${this.url}/solicitudes`, solicitud, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  //Actualizar los datos de una solicitud enviando el PUT
  //Editar Solicitud
  ActualizarSolicitud(solicitud: ModeloSolicitud): Observable<ModeloSolicitud>{
    return this.http.put<ModeloSolicitud>(`${this.url}/solicitudes/${solicitud.id}`, solicitud, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  //Eliminar una solicitud enviando el DELETE
  EliminarSolicitud(id: String): Observable<any>{
    return this.http.delete(`${this.url}/solicitudes/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }




}

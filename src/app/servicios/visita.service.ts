import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloCount } from '../modelos/count.modelo';
import { ModeloVisita } from '../modelos/visita.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class VisitaService {

  //Servicio del Modelo Solicituds para tomar datos desde la base de datos
  url = 'http://localhost:3000';
  token: String = "";
  //Se llaman los servicios HTTP para el envio de verbos 
  //Se llama servicio de seguridad para obtener el token
  constructor(private http: HttpClient, private seguridadServicio: SeguridadService) {
    this.token = this.seguridadServicio.ObtenerToken();
  }

  //Traer datos de las visitas de la base de datos
  ObtenerVisitas(): Observable<ModeloVisita[]>{
    return this.http.get<ModeloVisita[]>(`${this.url}/visitas` , {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  //Traer Visita por ID con GET y enviando el Token
  ObtenerVisitaPorId(id: String): Observable<ModeloVisita>{
    return this.http.get<ModeloVisita>(`${this.url}/visitas/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  //Traer la cantidad de visitas en Base de Datos, el count que no necesita TOKEN
  ObtenerCantidadVisitas(): Observable<ModeloCount>{
    return this.http.get<ModeloCount>(`${this.url}/visitas/count`);
  }

  //Crear una visita nueva enviando el POST
  CrearVisita(visita: ModeloVisita): Observable<ModeloVisita>{
    return this.http.post<ModeloVisita>(`${this.url}/visitas`, visita, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  //Actualizar los datos de una visita enviando el PUT
  //Editar Visita
  ActualizarVisita(visita: ModeloVisita): Observable<ModeloVisita>{
    return this.http.put<ModeloVisita>(`${this.url}/visitas/${visita.id}`, visita, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  //Eliminar una visita enviando el DELETE
  EliminarVisita(id: String): Observable<any>{
    return this.http.delete(`${this.url}/visitas/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

}

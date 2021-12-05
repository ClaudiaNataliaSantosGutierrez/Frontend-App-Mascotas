import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloCount } from '../modelos/count.modelo';
import { ModeloPersona } from '../modelos/persona.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  //Servicio del Modelo Personas para tomar datos desde la base de datos
  url = 'http://localhost:3000';
  token: String = "";
  //Se llaman los servicios HTTP para el envio de verbos 
  //Se llama servicio de seguridad para obtener el token
  constructor(private http: HttpClient, private seguridadServicio: SeguridadService) {
    this.token = this.seguridadServicio.ObtenerToken();
  }

  //Traer datos de Personas en la BD enviando el TOKEN por GET
  ObtenerPersonas(): Observable<ModeloPersona[]>{
    return this.http.get<ModeloPersona[]>(`${this.url}/personas` , {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  //Traer Persona por ID con GET y enviando el Token
  ObtenerPersonaPorId(id: String): Observable<ModeloPersona>{
    return this.http.get<ModeloPersona>(`${this.url}/personas/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  //Traer la cantidad de personas en Base de Datos, el count que no necesita TOKEN
  ObtenerCantidadPersonas(): Observable<ModeloCount>{
    return this.http.get<ModeloCount>(`${this.url}/personas/count`);
  }

  //Crear una persona nueva enviando el POST
  CrearPersona(persona: ModeloPersona): Observable<ModeloPersona>{
    return this.http.post<ModeloPersona>(`${this.url}/personas`, persona, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  //Actualizar los datos de una persona enviando el PUT
  //Editar Persona
  ActualizarPersona(persona: ModeloPersona): Observable<ModeloPersona>{
    return this.http.put<ModeloPersona>(`${this.url}/personas/${persona.id}`, persona, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  //Eliminar una persona enviando el DELETE
  EliminarPersona(id: String): Observable<any>{
    return this.http.delete(`${this.url}/personas/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloCount } from '../modelos/count.modelo';
import { ModeloVeterinario } from '../modelos/veterinario.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {

  //Servicio del Modelo Veterinarios para tomar datos desde la base de datos
  url = 'http://localhost:3000';
  token: String = "";
  //Se llaman los servicios HTTP para el envio de verbos 
  //Se llama servicio de seguridad para obtener el token
  constructor(private http: HttpClient, private seguridadServicio: SeguridadService) { 
    this.token = this.seguridadServicio.ObtenerToken();
  }

  //Traer datos de Veterinarios en la BD enviando el TOKEN por GET
  ObtenerVeterinarios(): Observable<ModeloVeterinario[]>{
    return this.http.get<ModeloVeterinario[]>(`${this.url}/veterinarios` , {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  //Traer Veterinario por ID con GET y enviando el Token
  ObtenerVeterinarioPorId(id: String): Observable<ModeloVeterinario>{
    return this.http.get<ModeloVeterinario>(`${this.url}/veterinarios/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  //Traer la cantidad de veterinarios en Base de Datos, el count que no necesita TOKEN
  ObtenerCantidadVeterinarios(): Observable<ModeloCount>{
    return this.http.get<ModeloCount>(`${this.url}/veterinarios/count`);
  }

  //Crear una veterinario nueva enviando el POST
  CrearVeterinario(veterinario: ModeloVeterinario): Observable<ModeloVeterinario>{
    return this.http.post<ModeloVeterinario>(`${this.url}/veterinarios`, veterinario, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  //Actualizar los datos de una veterinario enviando el PUT
  //Editar Veterinario
  ActualizarVeterinario(veterinario: ModeloVeterinario): Observable<ModeloVeterinario>{
    return this.http.put<ModeloVeterinario>(`${this.url}/veterinarios/${veterinario.id}`, veterinario, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  //Eliminar una veterinario enviando el DELETE
  EliminarVeterinario(id: String): Observable<any>{
    return this.http.delete(`${this.url}/veterinarios/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }


}

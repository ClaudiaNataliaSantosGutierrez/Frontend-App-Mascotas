import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloCount } from '../modelos/count.modelo';
import { ModeloVeterinaria } from '../modelos/veterinaria.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class VeterinariaService {

  //Servicio del Modelo Veterinarias para tomar datos desde la base de datos
  url = 'http://localhost:3000';
  token: String = "";
  //Se llaman los servicios HTTP para el envio de verbos 
  //Se llama servicio de seguridad para obtener el token
  constructor(private http: HttpClient, private seguridadServicio: SeguridadService) {
    this.token = this.seguridadServicio.ObtenerToken();
  }

  //Traer datos de Veterinarias en la BD enviando el TOKEN por GET
  ObtenerVeterinarias(): Observable<ModeloVeterinaria[]>{
    return this.http.get<ModeloVeterinaria[]>(`${this.url}/veterinarias` , {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  //Traer Veterinaria por ID con GET y enviando el Token
  ObtenerVeterinariaPorId(id: String): Observable<ModeloVeterinaria>{
    return this.http.get<ModeloVeterinaria>(`${this.url}/veterinarias/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  //Traer Veterinaria por ID en formato lista
  ObtenerVeterinariaPorIdLista(id: String): Observable<ModeloVeterinaria[]>{
    return this.http.get<ModeloVeterinaria[]>(`${this.url}/veterinarias/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  //Traer la cantidad de veterinarias en Base de Datos, el count que no necesita TOKEN
  ObtenerCantidadVeterinarias(): Observable<ModeloCount>{
    return this.http.get<ModeloCount>(`${this.url}/veterinarias/count`);
  }

  //Crear una veterinaria nueva enviando el POST
  CrearVeterinaria(veterinaria: ModeloVeterinaria): Observable<ModeloVeterinaria>{
    return this.http.post<ModeloVeterinaria>(`${this.url}/veterinarias`, veterinaria, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  //Actualizar los datos de una veterinaria enviando el PUT
  //Editar Veterinaria
  ActualizarVeterinaria(veterinaria: ModeloVeterinaria): Observable<ModeloVeterinaria>{
    return this.http.put<ModeloVeterinaria>(`${this.url}/veterinarias/${veterinaria.id}`, veterinaria, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  //Eliminar una veterinaria enviando el DELETE
  EliminarVeterinaria(id: String): Observable<any>{
    return this.http.delete(`${this.url}/veterinarias/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

}

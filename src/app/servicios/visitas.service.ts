import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloVisita } from '../modelos/visita.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class VisitasService {

  url = 'https://localhost:3000';
  token: string = "";

  constructor( private http: HttpClient, private seguridadServicio: SeguridadService) { 
    this.token = this.seguridadServicio.ObtenerToken();
  }

  ObtenerRegistros(): Observable  <ModeloVisita[]> {
    return this.http.get<ModeloVisita[]>(`${this.url}/visitas`);
  }

  CrearVisita(visita : ModeloVisita) : Observable<ModeloVisita>{
    alert(this.token); 
    return this.http.post<ModeloVisita>(`${this.url}/visitas`,
    visita,{
      headers : new HttpHeaders({ 
        'Authorization': `Bearer ${this.token}`
      })
    } 
    );
  }

  ActualizarVisita(visita : ModeloVisita) : Observable<ModeloVisita>{
    return this.http.put<ModeloVisita>(`${this.url}/visitas`,
    visita,{
      headers : new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    } 
    );
  }

  EliminarVisita(id : string) : Observable<any>{
    return this.http.delete(`${this.url}/visitas/${id}`,
    {
      headers : new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    } 
    );
  }

}

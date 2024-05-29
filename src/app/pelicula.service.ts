import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from './pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  //FindAll peliculas en backend
  private apiURL = "http://localhost:8081/api/v1/peliculas";

  constructor(private httpClient : HttpClient) { }

  //Obtener las peliculas
  obtenerListaDePeliculas():Observable<Pelicula[]>{
    return this.httpClient.get<Pelicula[]>(`${this.apiURL}`);
  }

  //Registrar peliculas
  registrarPelicula(pelicula:Pelicula): Observable<Object>{
    return this.httpClient.post(`${this.apiURL}`,pelicula);
  }
}

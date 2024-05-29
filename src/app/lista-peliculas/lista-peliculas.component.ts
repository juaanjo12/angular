import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../pelicula';
import { NgFor } from '@angular/common';
import { PeliculaService } from '../pelicula.service';
import { HttpClientModule } from '@angular/common/http';
import { CrearPeliculaComponent } from '../crear-pelicula/crear-pelicula.component';




@Component({
  selector: 'app-lista-peliculas',
  standalone: true,
  imports: [NgFor, CrearPeliculaComponent],
  templateUrl: './lista-peliculas.component.html',
  styleUrl: './lista-peliculas.component.css'
})
export class ListaPeliculasComponent implements OnInit{

peliculas:Pelicula[];

constructor(private peliculaServicio:PeliculaService){ }

ngOnInit(): void {
  this.obtenerPeliculas();
}


private obtenerPeliculas(){
  this.peliculaServicio.obtenerListaDePeliculas().subscribe(dato => {
    this.peliculas = dato;
  });
}

}

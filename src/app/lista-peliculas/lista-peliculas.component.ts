import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../pelicula';
import { NgFor } from '@angular/common';




@Component({
  selector: 'app-lista-peliculas',
  standalone: true,
  imports: [NgFor],
  templateUrl: './lista-peliculas.component.html',
  styleUrl: './lista-peliculas.component.css'
})
export class ListaPeliculasComponent implements OnInit{

peliculas:Pelicula[];

ngOnInit(): void {
  this.peliculas = [{
    "id":1,
    "nombre":"pelicula",
    "tipo":"humor",
    "edad":3,
    "duracion":120

  },
  {
    "id":2,
    "nombre":"pelicula2",
    "tipo":"miedo",
    "edad":13,
    "duracion":180
  }
]
}


}

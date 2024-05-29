import { Component, NgModule, OnInit } from '@angular/core';
import { Pelicula } from '../pelicula';
import { FormsModule, NgModel } from '@angular/forms';
import { PeliculaService } from '../pelicula.service';
import { Route, Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-crear-pelicula',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './crear-pelicula.component.html',
  styleUrl: './crear-pelicula.component.css'
})
export class CrearPeliculaComponent implements OnInit{

  pelicula : Pelicula = new Pelicula();

  constructor(private peliculaServicio:PeliculaService,private router:Router){
  }

  ngOnInit(): void {
    
  }

  guardarPelicula(){
    this.peliculaServicio.registrarPelicula(this.pelicula).subscribe(dato => {
      console.log(dato);
      this.irALaListaDePeliculas();
    },error => console.log(error));
  }

  irALaListaDePeliculas(){
    this.router.navigate(['/ListaPeliculas']);
  }
  
  onSubmit(){
    this.guardarPelicula();
    this
  }
}

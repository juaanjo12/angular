import { Routes } from '@angular/router';
import { CrearPeliculaComponent } from './crear-pelicula/crear-pelicula.component';
import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';

export const routes: Routes = [
    {path:'CrearPelicula',component:CrearPeliculaComponent},
    {path:'ListaPeliculas',component:ListaPeliculasComponent}
];

import { Routes } from '@angular/router';
import { CrearPeliculaComponent } from './crear-pelicula/crear-pelicula.component';
import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';
import { HttpClientModule } from '@angular/common/http';
import { ActualizarPeliculaComponent } from './actualizar-pelicula/actualizar-pelicula.component';

export const routes: Routes = [
    {path:'CrearPelicula',component:CrearPeliculaComponent},
    {path:'ListaPeliculas',component:ListaPeliculasComponent},
    {path: '', redirectTo:'ListaPeliculas',pathMatch:'full'},
    {path:'ActualizarPelicula',component:ActualizarPeliculaComponent},
    //{path:'BorrarPelicula',component:BorrarPeliculasComponent},

];

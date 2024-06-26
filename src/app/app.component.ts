import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';
import { HttpClientModule } from '@angular/common/http';
import { CabeceraComponent } from './cabecera/cabecera.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PieComponent } from './pie/pie.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule,CabeceraComponent, PieComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Gestión de películas';
   
}

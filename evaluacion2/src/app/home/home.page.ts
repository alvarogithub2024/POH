import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FrasesService } from '../servicios/frases.service';
import { Router } from '@angular/router';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports : [FormsModule, NgIf]
})

export class HomePage {
  fraseActual: { cita: string; autor: string } = { cita: '', autor: '' };
  //inyecta servicio y ruta
  constructor(private frasesService: FrasesService, private router: Router) {}
  //obtener frase aleatoria
  obtenerFraseAleatoria() {
    this.fraseActual = this.frasesService.getFraseAleatoria();
  }
  //para ir a la pagina de configuraciones
  irAPaginasConfiguracion() {
    this.router.navigate(['/paginaconfiguracion']);
  }
}

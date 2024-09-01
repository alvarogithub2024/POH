import { Component } from '@angular/core';
import { FrasesService } from 'src/app/servicios/frases.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-paginasconfiguracion',
  templateUrl: './paginaconfiguracion.page.html',
  styleUrls: ['./paginaconfiguracion.page.scss'],
  standalone : true,
  imports:[CommonModule, FormsModule]
})
export class PaginasConfiguracionPage {
  nuevaFrase: { cita: string; autor: string } = { cita: '', autor: '' };
  citaError: string = '';
  autorError: string = '';

  constructor(private frasesService: FrasesService, private router: Router) {}

  agregarNuevaFrase() {
    if (this.nuevaFrase.cita.trim().length < 5) {
      this.citaError = 'La cita debe tener al menos 5 caracteres.';
    } else {
      this.citaError = '';
    }

    if (this.nuevaFrase.autor.trim().length < 2) {
      this.autorError = 'El nombre del autor debe tener al menos 2 caracteres.';
    } else {
      this.autorError = '';
    }

    if (!this.citaError && !this.autorError) {
      this.frasesService.agregarFrase({
        cita: this.nuevaFrase.cita,
        autor: this.nuevaFrase.autor,
      });
      this.nuevaFrase = { cita: '', autor: '' };
    }
  }

  irAConfiguracion() {
    this.router.navigate(['/configuracion']);
  }
}


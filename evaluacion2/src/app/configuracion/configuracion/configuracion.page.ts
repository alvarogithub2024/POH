import { Component } from '@angular/core';
import { FrasesService } from 'src/app/servicios/frases.service';
import { Router } from '@angular/router';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar } from "@ionic/angular/standalone";

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
  standalone: true,
  imports: [IonToolbar, IonHeader, CommonModule, FormsModule, NgFor, NgIf]
})
export class ConfiguracionPage {
  frases: { cita: string, autor: string }[] = [];
  //inyecta el servicio en el constructor
  constructor(private frasesService: FrasesService, private router: Router) {
    this.frases = this.frasesService.getFrases();
  }
  //para elminar una frase especifica de la lista
  eliminarFrase(frase: { cita: string, autor: string }) {
    this.frasesService.eliminarFrase(frase);
    this.frases = this.frasesService.getFrases();
  }
  //para volver al home
  volverHome() {
    this.router.navigate(['/home']);
  }
}




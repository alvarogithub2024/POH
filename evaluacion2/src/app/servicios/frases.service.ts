import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class FrasesService {
  private frases = [
    { cita: 'La vida es bella', autor: 'Roberto Benigni' },
    { cita: 'Ser o no ser', autor: 'William Shakespeare' },
    { cita: 'Lo que no te mata te hace mas fuerte', autor: 'Friedrich Nietzsche' },
    { cita: 'Siempre da mas de lo que esperan de ti', autor: 'Larry Page' },
    { cita: 'Haz el amor y no la guerra', autor: 'Jhon Lenon' },
  ];
  //obtener el array
  getFrases() {
    return this.frases;
  }
  //obetener una cita aleatoria
  getFraseAleatoria() {
    const index = Math.floor(Math.random() * this.frases.length);
    return this.frases[index];
  }
  //agregar una nueva frase
  agregarFrase(frase: { cita: string, autor: string }) {
    this.frases.push(frase);
  }
  //eliminar una frase
  eliminarFrase(frase: { cita: string, autor: string }) {
    const index = this.frases.findIndex(f => f.cita === frase.cita && f.autor === frase.autor);
    if (index > -1) {
      this.frases.splice(index, 1);
    }
  }
}


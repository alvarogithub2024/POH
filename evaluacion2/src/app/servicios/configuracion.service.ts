import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {
  private configuracion = {
    permitirEliminarFrases: true
  };
  getConfiguracion() {
    return this.configuracion;
  }
  actualizarConfiguracion(config: { permitirEliminarFrases: boolean }) {
    this.configuracion = config;
  }
}

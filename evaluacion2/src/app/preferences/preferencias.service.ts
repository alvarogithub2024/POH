/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfiguracionPreference {
  private readonly STORAGE_KEY = 'app-configuracion';

  //meteodo para guardar la configuracion local
  setConfiguracion(config: any): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(config));
  }

  //metodo para obtener la informacion de forma local
  getConfiguracion(): any {
    const config = localStorage.getItem(this.STORAGE_KEY);
    return config ? JSON.parse(config) : this.getDefaultConfiguracion();
  }

  //metodo para gestionar de forma por defecto
  private getDefaultConfiguracion(): any {
    return {
      permitirEliminarFrases: true,
    };
  }
}*/

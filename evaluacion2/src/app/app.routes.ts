import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage),
  },
  {
    path: 'configuracion',
    loadComponent: () => import('./configuracion/configuracion/configuracion.page').then(m => m.ConfiguracionPage),
  },
  {
    path: 'paginaconfiguracion',
    loadComponent: () => import('./paginas/paginaconfiguracion/paginaconfiguracion.page').then(m => m.PaginasConfiguracionPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

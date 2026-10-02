import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },
  {
    path: 'servizi',
    loadComponent: () =>
      import('./features/catalogo-servizi/catalogo-servizi').then((m) => m.CatalogoServizi),
  },
  {
    path: 'domande',
    loadComponent: () =>
      import('./features/catalogo-servizi/catalogo-servizi').then((m) => m.CatalogoServizi),
  },
  {
    path: 'profilo',
    loadComponent: () => import('./features/profile/profile').then((m) => m.Profile),
  },
  {
    path: 'assistenza',
    loadComponent: () =>
      import('./features/catalogo-servizi/catalogo-servizi').then((m) => m.CatalogoServizi),
  },
  {
    path: 'impostazioni',
    loadComponent: () =>
      import('./features/catalogo-servizi/catalogo-servizi').then((m) => m.CatalogoServizi),
  },
];

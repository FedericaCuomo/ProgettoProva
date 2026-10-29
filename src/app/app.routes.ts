import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home').then(m => m.Home),
  },
  {
    path: 'service',
    loadComponent: () =>
      import('./features/catalogo-servizi/catalogo-servizi').then(
        m => m.CatalogoServizi,
      ),
  },
  {
    path: 'question',
    loadComponent: () =>
      import('./features/domande/domande').then(m => m.Domande),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./features/profile/profile').then(m => m.Profile),
  },
  {
    path: 'support',
    loadComponent: () =>
      import('./features/catalogo-servizi/catalogo-servizi').then(
        m => m.CatalogoServizi,
      ),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./features/catalogo-servizi/catalogo-servizi').then(
        m => m.CatalogoServizi,
      ),
  },
  {
    path: 'tables',
    loadComponent: () =>
      import('./features/tabelle/tabelle').then(m => m.Tabelle),
  },
];

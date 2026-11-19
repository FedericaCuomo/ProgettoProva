import { Routes } from '@angular/router';

export const TABELLE_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/tabelle-search/tabelle').then(m => m.Tabelle),
  },
  {
    path: 'details/:id',
    loadComponent: () =>
      import('./pages/tabelle-dettaglio/tabelle-dettaglio').then(
        m => m.TabelleDettaglio,
      ),
  },
];

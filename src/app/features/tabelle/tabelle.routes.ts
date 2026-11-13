import { Routes } from '@angular/router';
import { TabelleStore } from './store/tabelle.store';

export const TABELLE_ROUTES: Routes = [
  {
    // percorso radice
    path: '',
    providers: [TabelleStore],
    children: [
      {
        path: '',
        loadComponent: () => import('./tabelle').then(m => m.Tabelle),
      },
      {
        path: 'details',
        loadComponent: () =>
          import('./pages/tabelle-dettaglio/tabelle-dettaglio').then(
            m => m.TabelleDettaglio,
          ),
      },
    ],
  },
];

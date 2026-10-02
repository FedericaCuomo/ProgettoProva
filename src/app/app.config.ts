import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // 1. Importa HttpClient
import { provideHost } from 'ngx-sirio-lib-20';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(), // 2. Registralo qui!
    provideHost({
      env: 'dev',
      tracking: {
        CAA: '100',
        Environment: 'DEV',
      },
      mockHeader: true,
    }),
  ],
};

import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Layout } from './core/layout/layout';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  schemas: [CUSTOM_ELEMENTS_SCHEMA], //Questo dice ad Angular di accettare i custom element di Sirio
  templateUrl: './app.html',
  imports: [Layout],
})
export class App {}

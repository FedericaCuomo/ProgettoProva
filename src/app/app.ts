import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {} from 'ngx-sirio-lib-20';

@Component({
  selector: 'app-root',
  schemas: [CUSTOM_ELEMENTS_SCHEMA], //Questo dice ad Angular di accettare i custom element di Sirio
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [],
})
export class App {}

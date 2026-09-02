import { Component } from '@angular/core';
import {
  SirioCardComponent,
  SirioCardSubtitleComponent,
  SirioCardTitleComponent,
  SirioCardBodyComponent,
  SirioInputComponent,
  SirioButtonComponent,
} from 'ngx-sirio-lib-20';

@Component({
  selector: 'app-hero',
  imports: [
    SirioCardComponent,
    SirioInputComponent,
    SirioCardSubtitleComponent,
    SirioCardTitleComponent,
    SirioCardBodyComponent,
    SirioButtonComponent,
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {}

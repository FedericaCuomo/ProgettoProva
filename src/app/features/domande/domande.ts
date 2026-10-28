import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Tabella } from './components/tabella/tabella';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-domande',
  imports: [Hero, Tabella],
  templateUrl: './domande.html',
})
export class Domande {}

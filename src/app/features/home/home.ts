import { Component } from '@angular/core';

import { Hero } from './hero/hero';
import { Services } from './services/services';

@Component({
  selector: 'app-home',
  imports: [Hero, Services],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}

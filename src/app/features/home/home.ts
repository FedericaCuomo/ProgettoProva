import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Services } from './components/services/services';

@Component({
  selector: 'app-home',
  imports: [Hero, Services],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  search: string = '';

  onSerach(value: string) {
    this.search = value;
  }
}

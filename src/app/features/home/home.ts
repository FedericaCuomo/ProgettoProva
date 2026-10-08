import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Services } from './components/services/services';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-home',
  imports: [Hero, Services],
  templateUrl: './home.html',
})
export class Home {
  search = '';

  onSerach(value: string) {
    this.search = value;
  }
}

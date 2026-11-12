import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Services } from './components/services/services';
import { CoreStore } from '../../core/store/core.store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-home',
  imports: [Hero, Services],
  templateUrl: './home.html',
})
export class Home {
  readonly coreStore = inject(CoreStore);
  search = '';

  onSerach(value: string) {
    this.search = value;
  }
}

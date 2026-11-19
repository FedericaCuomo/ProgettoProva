import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabelleStore } from './store/tabelle.store';

@Component({
  selector: 'app-tabelle-home',
  imports: [RouterOutlet],
  template: `<router-outlet />`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TabelleStore],
})
export class TabelleHomeComponent {}

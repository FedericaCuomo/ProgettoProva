import {
  Component,
  ChangeDetectionStrategy,
  inject,
  computed,
} from '@angular/core';
import { TabelleStore } from '../../store/tabelle.store';
import { SirioButtonComponent } from 'ngx-sirio-lib-20';
import { Router } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-tabelle-dettaglio',
  imports: [SirioButtonComponent],
  templateUrl: './tabelle-dettaglio.html',
})
export class TabelleDettaglio {
  public router = inject(Router);

  readonly tabelleStore = inject(TabelleStore);

  userInfo = computed(() => this.tabelleStore.userInfo());

  constructor() {
    this.tabelleStore.loadUserDetails();
  }

  back() {
    this.router.navigate(['/tables']);
  }
}

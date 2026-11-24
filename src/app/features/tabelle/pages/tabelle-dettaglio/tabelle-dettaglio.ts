import {
  Component,
  ChangeDetectionStrategy,
  inject,
  computed,
} from '@angular/core';
import { TabelleStore } from '../../store/tabelle.store';
import { SirioButtonComponent } from 'ngx-sirio-lib-20';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { Loader } from '../../../../shared/components/loader/loader';
import { UserProfile } from '../../../../core/api-services/profilo/profilo.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-tabelle-dettaglio',
  imports: [SirioButtonComponent, TranslatePipe, Loader],
  templateUrl: './tabelle-dettaglio.html',
})
export class TabelleDettaglio {
  public router = inject(Router);
  readonly tabelleStore = inject(TabelleStore);

  userInfo = computed(() => this.tabelleStore.userInfo());

  userDetails: { key: keyof UserProfile; title: string }[] = [
    {
      key: 'cittaResidenza',
      title: 'tabelle-dettaglio-section.informazioni.cittaResidenza',
    },
    {
      key: 'luogoNascita',
      title: 'tabelle-dettaglio-section.informazioni.luogoNascita',
    },
    {
      key: 'dataNascita',
      title: 'tabelle-dettaglio-section.informazioni.dataNascita',
    },
    {
      key: 'indirizzoResidenza',
      title: 'tabelle-dettaglio-section.informazioni.indirizzoResidenza',
    },
    {
      key: 'statoCivile',
      title: 'tabelle-dettaglio-section.informazioni.statoCivile',
    },
    {
      key: 'mail',
      title: 'tabelle-dettaglio-section.informazioni.mail',
    },
    {
      key: 'telefono',
      title: 'tabelle-dettaglio-section.informazioni.phone',
    },
  ];

  constructor() {
    this.tabelleStore.loadUserDetails();
  }

  back() {
    this.router.navigate(['/tables']);
  }
}

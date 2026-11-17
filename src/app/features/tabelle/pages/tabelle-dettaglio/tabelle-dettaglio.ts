import {
  Component,
  ChangeDetectionStrategy,
  inject,
  computed,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabelleStore } from '../../store/tabelle.store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-tabelle-dettaglio',
  imports: [],
  templateUrl: './tabelle-dettaglio.html',
})
export class TabelleDettaglio {
  private route = inject(ActivatedRoute);
  readonly tabelleStore = inject(TabelleStore);

  tableDataSignal = computed(() => this.tabelleStore.usersTable());

  // route  rappresenta l'url corrente.
  // snapshot è un'istantanea dello stato della rotta nel momento in cui il componente viene caricato.
  // paramMap raccoglie tutti i parametri dinamici presenti nell'URL
  // get('id') è il metodo che estrae effettivamente il valore
  id: string | null = this.route.snapshot.paramMap.get('id');

  user = computed(() =>
    this.tableDataSignal().find(user => String(user['id']) === String(this.id)),
  );
}

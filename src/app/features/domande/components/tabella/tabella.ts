import {
  Component,
  ChangeDetectionStrategy,
  // signal,
  // WritableSignal,
} from '@angular/core';
import {
  SirioExpandableContainerComponent,
  SirioTitleBarComponent,
  SirioTitleBarActionComponent,
  SirioTableModule,
  SirioDataSource,
} from 'ngx-sirio-lib-20';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-tabella',
  imports: [
    SirioExpandableContainerComponent,
    SirioTableModule,
    SirioTitleBarComponent,
    SirioTitleBarActionComponent,
  ],
  templateUrl: './tabella.html',
})
export class Tabella {
  // value = signal<number>(1);
  // value2 = signal<number>(1);

  // onIncrement(targetSignal: WritableSignal<number>) {
  //   targetSignal.update(oldValue => oldValue + 1);
  // }

  // onSum() {
  //   return this.value() + this.value2();
  // }

  displayedColumns = ['name', 'age', 'country'];

  dataSource = new SirioDataSource([
    { name: 'Antonio', age: 26, country: 'Italia' },
    { name: 'Roberto', age: 1, country: 'Spagna' },
    { name: 'Lucilla', age: 22, country: 'Francia' },
    { name: 'Harry', age: 1, country: 'Germania' },
    { name: 'Carmine', age: 7, country: 'Portogallo' },
    { name: 'Nicola', age: 67, country: 'Svizzera' },
    { name: 'Sabrina', age: 94, country: 'Belgio' },
    { name: 'Lucia', age: 84, country: 'Olanda' },
  ]);
}

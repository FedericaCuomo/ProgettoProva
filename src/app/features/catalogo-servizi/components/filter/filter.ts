import {
  Component,
  EventEmitter,
  inject,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ServiziForniti } from '../../../../shared/services/servizi-forniti';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-filter',
  imports: [],
  templateUrl: './filter.html',
})
export class Filter {
  // inietto i services
  private serviziService = inject(ServiziForniti);
  services = this.serviziService.services;

  // categoria selezionata come output da mandare alla lista servizi richiamandolo in catalogoservizi
  @Output() categorySelected = new EventEmitter();

  // per identificare la categoria attiva in quel momento
  activeCategory = 'tutti';
  select = '';

  // categorie da stampare
  categories = ['tutti', 'lavoro', 'famiglia', 'pensione', 'invalidità'];

  selectedCategory(category: string) {
    this.activeCategory = category;
    this.categorySelected.emit(category);
  }

  onChangeSelect(event: Event) {
    const selectFilter = event.target as HTMLSelectElement;
    this.selectedCategory(selectFilter.value);
  }
}

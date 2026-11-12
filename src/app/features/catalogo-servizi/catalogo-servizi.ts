import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ListaServizi } from './components/lista-servizi/lista-servizi';
import { Hero } from './components/hero/hero';
import { Filter } from './components/filter/filter';
import { Search } from './components/search/search';
import { SirioButtonComponent, SirioDialogService } from 'ngx-sirio-lib-20';
import { ServiziForniti } from '../../shared/services/servizi-forniti';
import { AddServiceForm } from './components/add-service-form/add-service-form';
import { ServicesType } from '../../shared/models/services.model';
import { CoreStore } from '../../core/store/core.store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-catalogo-servizi',
  imports: [Hero, ListaServizi, Filter, Search, SirioButtonComponent],
  templateUrl: './catalogo-servizi.html',
})
export class CatalogoServizi {
  readonly coreStore = inject(CoreStore);

  private serviziService = inject(ServiziForniti);
  private dialogService = inject(SirioDialogService);

  selectedCategory = 'tutti';
  isOpen = false;
  // searchQuery = '';

  // metodo che gestisce il cambiamento della categoria
  onCategoryChange(category: string) {
    this.selectedCategory = category;
  }

  // onSearchChange(query: string) {
  //   this.searchQuery = query;
  // }

  openAddDialog() {
    this.dialogService
      .openDialog(AddServiceForm)
      .afterClosed()
      .subscribe(servizio => {
        if (servizio) {
          const nuovoServizio: ServicesType = {
            name: servizio.serviceName,
            icon: servizio.serviceIcon,
            text: servizio.serviceText,
            category: servizio.serviceCategory,
          };

          this.serviziService.addService(nuovoServizio);
        }
      });
  }
}

import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ListaServizi } from './components/lista-servizi/lista-servizi';
import { Hero } from './components/hero/hero';
import { Filter } from './components/filter/filter';
import { Search } from './components/search/search';
import { SirioButtonComponent, SirioDialogService } from 'ngx-sirio-lib-20';
import { ServiziForniti } from '../../shared/services/servizi-forniti';
import { ServicesType } from '../../types';
import { AddServiceForm } from './components/add-service-form/add-service-form';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-catalogo-servizi',
  imports: [Hero, ListaServizi, Filter, Search, SirioButtonComponent],
  templateUrl: './catalogo-servizi.html',
})
export class CatalogoServizi {
  private serviziService = inject(ServiziForniti);
  private dialogService = inject(SirioDialogService);

  selectedCategory = 'tutti';
  isOpen = false;

  // onServizioAggiunto(servizio: ServicesType) {
  //   this.serviziService.addService(servizio);
  // }

  // metodo che gestisce il cambiamento della categoria
  onCategoryChange(category: string) {
    this.selectedCategory = category;
  }

  openAddDialog() {
    this.dialogService
      .openDialog(AddServiceForm)
      .afterClosed()
      .subscribe(data => {
        if (data) {
          const nuovoServizio: ServicesType = {
            name: data.serviceName,
            icon: data.serviceIcon,
            text: data.serviceText,
            category: data.serviceCategory,
          };

          this.serviziService.addService(nuovoServizio);
        }
      });
  }
}

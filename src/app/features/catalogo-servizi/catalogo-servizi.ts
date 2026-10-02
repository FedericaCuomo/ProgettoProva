import { Component, inject } from '@angular/core';
import { ListaServizi } from './components/lista-servizi/lista-servizi';
import { Hero } from './components/hero/hero';
import { Filter } from './components/filter/filter';
import { Search } from './components/search/search';
import { SirioButtonComponent } from 'ngx-sirio-lib-20';
import { NewServiceForm } from './components/new-service-form/new-service-form';
import { ServiziForniti } from '../../shared/services/servizi-forniti';
import { ServicesType } from '../../types';

@Component({
  selector: 'app-catalogo-servizi',
  imports: [Hero, ListaServizi, Filter, Search, SirioButtonComponent, NewServiceForm],
  templateUrl: './catalogo-servizi.html',
  styleUrl: './catalogo-servizi.scss',
})
export class CatalogoServizi {
  private serviziService = inject(ServiziForniti);

  selectedCategory: string = 'tutti';
  isOpen = false;

  onServizioAggiunto(servizio: ServicesType) {
    this.serviziService.addService(servizio);
  }

  // metodo che gestisce il cambiamento della categoria
  onCategoryChange(category: string) {
    this.selectedCategory = category;
  }
}

import { Component, inject, Input } from '@angular/core';
import { ServiziForniti } from '../../../../shared/services/servizi-forniti';
import {
  SirioCardComponent,
  SirioCardTitleComponent,
  SirioCardSubtitleComponent,
  SirioTagComponent,
} from 'ngx-sirio-lib-20';
@Component({
  selector: 'app-lista-servizi',
  imports: [SirioCardComponent, SirioCardTitleComponent, SirioCardSubtitleComponent],
  templateUrl: './lista-servizi.html',
  styleUrl: './lista-servizi.scss',
})
export class ListaServizi {
  private serviziService = inject(ServiziForniti);
  services = this.serviziService.services;
  colorIcon = this.serviziService.getColorIcon;
  colorBox = this.serviziService.getColorBox;

  // riceve come input questi dati da CatalogoServizi
  @Input() selectedCategory: string = 'tutti';

  // metodo che gestisce i filtri
  get filteredServices() {
    if (!this.selectedCategory || this.selectedCategory === 'tutti') {
      return this.services();
    }
    return this.services().filter((s) => s.category === this.selectedCategory);
  }
}

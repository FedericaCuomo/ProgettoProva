import {
  Component,
  inject,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ServiziForniti } from '../../../../shared/services/servizi-forniti';
import { SirioCardComponent } from 'ngx-sirio-lib-20';
import { NgClass } from '@angular/common';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-lista-servizi',
  imports: [SirioCardComponent, NgClass],
  templateUrl: './lista-servizi.html',
})
export class ListaServizi {
  private serviziService = inject(ServiziForniti);
  services = this.serviziService.services;
  colorIcon = this.serviziService.getColorIcon;
  colorBox = this.serviziService.getColorBox;

  // riceve come input questi dati da CatalogoServizi
  @Input() selectedCategory = 'tutti';

  // metodo che gestisce i filtri
  get filteredServices() {
    if (!this.selectedCategory || this.selectedCategory === 'tutti') {
      return this.services();
    }
    return this.services().filter(s => s.category === this.selectedCategory);
  }
}

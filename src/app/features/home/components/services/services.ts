import { Component, inject, Input } from '@angular/core';
import {
  SirioCardComponent,
  SirioCardTitleComponent,
  SirioCardSubtitleComponent,
} from 'ngx-sirio-lib-20';
import { ServiziForniti } from '../../../../shared/services/servizi-forniti';

@Component({
  selector: 'app-services',
  imports: [SirioCardComponent, SirioCardTitleComponent, SirioCardSubtitleComponent],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  // inietto glie elementi che stanno nel services
  private serviziService = inject(ServiziForniti);
  services = this.serviziService.services;
  colorIcon = this.serviziService.getColorIcon;
  colorBox = this.serviziService.getColorBox;
  getSearchService = this.serviziService.getSearchService;

  // input che mi dice quali servizi mostrare a schermo
  @Input() serach: string = '';

  // filtro i risultati in base all'input della ricerca - il metodo è nel service
  get filteredService() {
    return this.getSearchService(this.serach);
  }
}

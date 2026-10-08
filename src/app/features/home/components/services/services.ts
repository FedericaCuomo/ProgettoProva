import {
  Component,
  inject,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { NgClass } from '@angular/common';
import {
  SirioCardComponent,
  SirioCardTitleComponent,
  SirioCardSubtitleComponent,
} from 'ngx-sirio-lib-20';
import { ServiziForniti } from '../../../../shared/services/servizi-forniti';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-services',
  imports: [
    NgClass,
    SirioCardComponent,
    SirioCardTitleComponent,
    SirioCardSubtitleComponent,
  ],
  templateUrl: './services.html',
})
export class Services {
  // inietto glie elementi che stanno nel services
  private serviziService = inject(ServiziForniti);
  services = this.serviziService.services;
  colorIcon = this.serviziService.getColorIcon;
  colorBox = this.serviziService.getColorBox;
  getSearchService = this.serviziService.getSearchService;

  // input che mi dice quali servizi mostrare a schermo
  @Input() serach = '';

  // filtro i risultati in base all'input della ricerca - il metodo è nel service
  get filteredService() {
    return this.getSearchService(this.serach);
  }
}

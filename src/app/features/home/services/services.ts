import { Component } from '@angular/core';
import { servicesType } from '../../../types';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  services: servicesType[] = [
    {
      name: 'NASpI',
      text: 'Indennità di disoccupazione',
      icon: 'money',
    },
    {
      name: 'Assegno unico',
      text: 'Sostegno per i figli',
      icon: 'child',
    },
    {
      name: 'Pensione',
      text: 'Simulazione e domanda',
      icon: 'banc',
    },
    {
      name: 'Invalidità civile',
      text: 'Domanda di riconoscimento',
      icon: 'heart',
    },
    {
      name: 'Reddito di cittadinanza',
      text: 'Verifica requisiti',
      icon: 'home',
    },
    {
      name: 'Tutti i servizi',
      text: 'Catalogo completo',
      icon: 'dot',
    },
  ];
}

import { Injectable, signal } from '@angular/core';
import { ServicesType } from '../../types';
@Injectable({
  providedIn: 'root',
})
export class ServiziForniti {
  services = signal<ServicesType[]>([
    {
      name: 'NASpI',
      text: 'Indennità di disoccupazione',
      icon: 'fa-solid fa-money-bill-wave',
      category: 'lavoro',
    },
    {
      name: 'Assegno unico',
      text: 'Sostegno per i figli',
      icon: 'fa-solid fa-baby-carriage',
      category: 'famiglia',
    },
    {
      name: 'Pensione',
      text: 'Simulazione e domanda',
      icon: 'fa-solid fa-bank',
      category: 'pensione',
    },
    {
      name: 'Invalidità civile',
      text: 'Domanda di riconoscimento',
      icon: 'fa-solid fa-heart-pulse',
      category: 'invalidità',
    },
    {
      name: 'Reddito di cittadinanza',
      text: 'Verifica requisiti',
      icon: 'fa-solid fa-house-chimney',
      category: 'lavoro',
    },
    {
      name: 'Tutti i servizi',
      text: 'Catalogo completo',
      icon: 'fa-solid fa-comment-dots',
      category: 'famiglia',
    },
  ]);

  addService(newService: ServicesType): void {
    this.services.update((listaAttuale) => [...listaAttuale, newService]);
  }

  getColorBox(category: string): string {
    switch (category) {
      case 'lavoro':
        return 'bg-blue-100';
      case 'famiglia':
        return 'bg-green-100';
      case 'pensione':
        return 'bg-yellow-100';
      case 'invalidità':
        return 'bg-red-100';
      default:
        return 'bg-gray-100';
    }
  }
  getColorIcon(category: string): string {
    switch (category) {
      case 'lavoro':
        return 'text-blue-600';
      case 'famiglia':
        return 'text-green-600';
      case 'pensione':
        return 'text-yellow-600';
      case 'invalidità':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  }

  getSearchService(query: string): ServicesType[] {
    const cleanQuery = query.toLowerCase().trim();

    if (!cleanQuery) {
      return this.services();
    }
    return this.services().filter((service) => {
      return (
        service.name.toLowerCase().includes(cleanQuery) ||
        service.text.toLowerCase().includes(cleanQuery)
      );
    });
  }
}

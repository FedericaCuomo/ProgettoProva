import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from './components/hero/hero';
import { CardConfig, CardField, UserType } from '../../types';
import { CardProfileComponent } from './components/card-profile/card-profile';
import { UserCard } from './components/user-card/user-card';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-profile',
  imports: [Hero, CardProfileComponent, UserCard],
  templateUrl: './profile.html',
})
export class Profile {
  datiAnagraficiFields = signal<CardField[]>([
    { key: 'fullname', label: 'Nome e Cognome' },
    { key: 'date', label: 'Data e luogo di nascita' },
    { key: 'address', label: 'Indirizzo di residenza' },
    { key: 'status', label: 'Stato civile' },
  ]);
  contattiFields = signal<CardField[]>([
    { key: 'mail', label: 'Email principale' },
    { key: 'phone', label: 'Numero di telefono' },
  ]);

  profileCardsConfig = signal<CardConfig[]>([
    {
      title: 'Dati anagrafici',
      icon: 'fa-solid fa-user-gear',
      fields: this.datiAnagraficiFields(),
    },
    {
      title: 'Contatti',
      icon: 'fa-solid fa-address-book',
      fields: this.contattiFields(),
    },
  ]);

  user = signal<UserType>({
    fullname: 'Mario Rossi',
    date: '22/11/2000',
    city: 'Torino',
    address: 'corso Francia 79',
    status: 'coniugato',
    CF: 'CMUFRC00S62F839Q',
    mail: 'mario.rossi@gmail.com',
    phone: '3336243038',
  });

  // userList = signal<UserType[]>([
  //   {
  //     fullname: 'Mario Rossi',
  //     date: '22/11/2000',
  //     city: 'Torino',
  //     address: 'corso Francia 79',
  //     status: 'coniugato',
  //     CF: 'CMUFRC00S62F839Y',
  //     mail: 'mario.rossi@gmail.com',
  //     phone: '3336243038',
  //   },
  //   {
  //     fullname: 'Federica Cuomo',
  //     date: '22/11/2000',
  //     city: 'Napoli',
  //     address: 'corso umberto',
  //     status: 'coniugato',
  //     CF: 'CMUFRC00S62F839Q',
  //     mail: 'mario.rossi@gmail.com',
  //     phone: '3336243038',
  //   },
  // ]);

  // onUpdateDati(nuoviDati: Partial<UserType>) {
  //   this.user.update(currentData => ({ ...currentData, ...nuoviDati }));
  // }

  onUserUpdated(nuoviDatiUtente: UserType) {
    this.user.set(nuoviDatiUtente);
  }
}

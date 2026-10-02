import { Component, Input, Output, signal } from '@angular/core';
import { Hero } from './components/hero/hero';
import { UserCard } from './components/user-card/user-card';
import { CardField, UserType } from '../../types';
import { CardProfile } from './components/card-profile/card-profile';

@Component({
  selector: 'app-profile',
  imports: [Hero, UserCard, CardProfile],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  datiAnagraficiFields: CardField[] = [
    { key: 'fullname', label: 'Nome e Cognome', value: 'Mario Rossi' },
    { key: 'dateCity', label: 'Data e luogo di nascita', value: '22/11/2000, Torino' },
    { key: 'address', label: 'Indirizzo di residenza', value: 'corso Francia 79' },
    { key: 'status', label: 'Stato civile', value: 'coniugato' },
  ];
  contattiFields: CardField[] = [
    { key: 'mail', label: 'Email principale', value: 'mario.rossi@gmail.com' },
    { key: 'phone', label: 'Numero di telefono', value: '3336243038' },
  ];

  // user: UserType = {
  //   fullname: 'Mario Rossi',
  //   date: '22/11/2000',
  //   city: 'Torino',
  //   address: 'corso Francia 79',
  //   status: 'coniugato',
  //   CF: 'CMUFRC00S62F839Q',
  //   mail: 'mario.rossi@gmail.com',
  //   phone: '3336243038',
  // };

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

  onUpdateDati(nuoviDati: Partial<UserType>) {
    this.user.update((currentData) => ({ ...currentData, ...nuoviDati }));
  }
}

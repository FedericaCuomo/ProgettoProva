import {
  Component,
  signal,
  ChangeDetectionStrategy,
  inject,
} from '@angular/core';
import { Hero } from './components/hero/hero';
import { CardProfileComponent } from './components/card-profile/card-profile';
import { UserCard } from './components/user-card/user-card';
import { CardConfig, CardField } from './models/profile.model';
import { Loader } from '../../shared/components/loader/loader';
import { ProfileService } from '../../core/api-services/profilo/profilo.service';
import { UserProfile } from '../../core/api-services/profilo/profilo.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-profile',
  imports: [Hero, CardProfileComponent, UserCard, Loader],
  templateUrl: './profile.html',
})
export class Profile {
  isLoadingProfile = signal(false);
  public profileService = inject(ProfileService);
  user = signal<UserProfile | undefined>(undefined);

  ngOnInit() {
    this.isLoadingProfile.set(true);
    this.profileService.getUser().subscribe({
      next: res => {
        this.user.set(res);
        this.isLoadingProfile.set(false);
      },
    });
  }

  datiAnagraficiFields = signal<CardField[]>([
    { key: 'nome', label: 'Nome ' },
    { key: 'cognome', label: 'Cognome ' },
    { key: 'dataNascita', label: 'Data di nascita' },
    { key: 'indirizzoResidenza', label: 'Indirizzo di residenza' },
    { key: 'statoCivile', label: 'Stato civile' },
  ]);

  contattiFields = signal<CardField[]>([
    { key: 'mail', label: 'Email principale' },
    { key: 'telefono', label: 'Numero di telefono' },
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

  // user = signal<UserType>({
  //   fullname: 'Mario Rossi',
  //   date: '22/11/2000',
  //   city: 'Torino',
  //   address: 'corso Francia 79',
  //   status: 'coniugato',
  //   CF: 'CMUFRC00S62F839Q',
  //   mail: 'mario.rossi@gmail.com',
  //   phone: '3336243038',
  // });

  // set è un metodo dei signal e si usa per sovrascrivere il valore con uno nuovo
  // onUserUpdated(nuoviDatiUtente: UserType) {
  //   this.user.set(nuoviDatiUtente);
  // }
}

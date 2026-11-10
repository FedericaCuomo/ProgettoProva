import { UsersTableService } from './../../core/api-services/users-table/users-table.service';
import {
  Component,
  ChangeDetectionStrategy,
  signal,
  inject,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { AnagraficaForm } from '../tabelle/models/table.model';
import { Opzioni } from '../../core/api-services/tipologiche/tipologiche.model';
import { TipologicheService } from '../../core/api-services/tipologiche/tipologiche.service';
import { catchError, of, tap } from 'rxjs';
import { UserTable } from '../../core/api-services/users-table/users-table.model';
import { SirioToastService } from 'ngx-sirio-lib-20';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-prova',
  imports: [TranslatePipe, ReactiveFormsModule],
  templateUrl: './prova.html',
  styleUrl: './prova.scss',
})
export class Prova {
  readonly toastService = inject(SirioToastService);
  public translate = inject(TranslateService);
  public tipologicheService = inject(TipologicheService);
  public usersTableService = inject(UsersTableService);

  isSearched = signal<boolean>(false);
  listData = signal<UserTable[]>([]);
  nazioniOptions = signal<Opzioni[]>([]);
  cityOptions = signal<Opzioni[]>([]);
  genderOptions = signal<Opzioni[]>([]);

  formProva = new FormGroup<AnagraficaForm>({
    name: new FormControl<string | null>('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    surname: new FormControl<string | null>('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    date: new FormControl<string | null>('', [Validators.required]),
    nazioni: new FormControl<string | null>('', [Validators.required]),
    city: new FormControl<string | null>('', [Validators.required]),
    gender: new FormControl<string | null>('', [Validators.required]),
  });

  constructor() {
    // nazioni
    this.tipologicheService
      .getNazioni()
      .pipe(
        tap(res => {
          this.nazioniOptions.set(res);
        }),
      )
      .subscribe();

    // città
    this.tipologicheService
      .getCitta()
      .pipe(
        tap(res => {
          this.cityOptions.set(res);
        }),
      )
      .subscribe();

    // gender
    this.tipologicheService
      .getGender()
      .pipe(
        tap(res => {
          this.genderOptions.set(res);
        }),
      )
      .subscribe();
  }

  onReset() {
    this.formProva.reset();
    this.isSearched.set(false);
  }

  onSearch() {
    this.isSearched.set(true);
    console.log(this.formProva.controls.name.value);
    console.log(this.formProva.controls.surname.value);
    console.log(this.formProva.controls.date.value);
    console.log(this.formProva.controls.nazioni.value);
    console.log(this.formProva.controls.city.value);
    console.log(this.formProva.controls.gender.value);

    this.usersTableService
      .getUsersTable()
      .pipe(
        tap(res => {
          this.listData.set(res);
        }),
        catchError(() => {
          this.toastService.openToast({
            title: 'Errore',
            text: 'Non è stato possibile contattare il server',
            type: 'danger',
            delay: 5000,
          });
          // Restituisce un Observable che emette 'false' in caso di errore
          return of(false);
        }),
      )
      .subscribe();
  }
}

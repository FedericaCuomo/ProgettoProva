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
import { Opzioni } from '../../core/api-services/tipologiche/tipologiche.model';
import { TipologicheService } from '../../core/api-services/tipologiche/tipologiche.service';
import { tap } from 'rxjs';
import { UserTable } from '../../core/api-services/users-table/users-table.model';
import { SirioToastService } from 'ngx-sirio-lib-20';
import { AnagraficaFormPRova } from '../tabelle/models/table.model';

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

  emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  CFRegex = /^[A-Z]{6}[0-9]{2}[A-EHLMPR-T][0-9]{2}[A-Z][0-9]{3}[A-Z]$/i;
  formProva = new FormGroup<AnagraficaFormPRova>({
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
    mail: new FormControl<string | null>('', [
      Validators.required,
      Validators.pattern(this.emailRegex),
    ]),
    cf: new FormControl<string | null>('', [
      Validators.required,
      Validators.pattern(this.CFRegex),
    ]),
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
  }
}

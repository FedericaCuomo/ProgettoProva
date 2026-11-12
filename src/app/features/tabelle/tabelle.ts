import { CoreStore } from './../../core/store/core.store';
import { ProfileService } from './../../core/api-services/profilo/profilo.service';
import { UsersTableService } from './../../core/api-services/users-table/users-table.service';
import { TipologicheService } from './../../core/api-services/tipologiche/tipologiche.service';
import { TestService } from './../../core/api-services/test-api/test-api.service';
import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
  inject,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  SirioInputComponent,
  SirioDatepickerComponent,
  TableColumnConfig,
  TableData,
  SirioButtonComponent,
  SirioAlertComponent,
  SirioAlertMessageComponent,
  SirioValidationDirective,
  SirioSelectComponent,
  SirioSelectPanelComponent,
  SirioSelectOptionComponent,
  SirioRadioButtonComponent,
  SirioRadioGroupComponent,
  SirioTableModule,
  SirioToastService,
} from 'ngx-sirio-lib-20';
import { AnagraficaForm } from './models/table.model';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Loader } from '../../shared/components/loader/loader';
import { Opzioni } from '../../core/api-services/tipologiche/tipologiche.model';
import { catchError, EMPTY, finalize, of, tap } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-tabelle',
  imports: [
    SirioInputComponent,
    ReactiveFormsModule,
    TranslatePipe,
    SirioDatepickerComponent,
    SirioButtonComponent,
    SirioAlertComponent,
    SirioAlertMessageComponent,
    Loader,
    SirioValidationDirective,
    SirioSelectComponent,
    SirioSelectPanelComponent,
    SirioSelectOptionComponent,
    SirioRadioButtonComponent,
    SirioRadioGroupComponent,
    SirioTableModule,
  ],
  templateUrl: './tabelle.html',
  styleUrl: './tabelle.scss',
})
export class Tabelle {
  public translate = inject(TranslateService);
  public testService = inject(TestService);
  public tipologicheService = inject(TipologicheService);
  public usersTableService = inject(UsersTableService);
  public profileService = inject(ProfileService);
  readonly toastService = inject(SirioToastService);
  readonly coreStore = inject(CoreStore);

  // user = signal<UserProfile | null>(null);
  nazioniOptions = signal<Opzioni[]>([]);
  cityOptions = signal<Opzioni[]>([]);
  genderOptions = signal<Opzioni[]>([]);
  tableDataSignal = signal<TableData[]>([]);
  text = signal<string>('');
  hasSearched = signal<boolean>(false);
  isLoading = signal<boolean>(false);
  errorDate = signal<boolean>(false);
  errorServiceTable = signal<boolean>(false);
  showTable = computed<boolean>(
    () =>
      this.hasSearched() &&
      !this.isLoading() &&
      !this.errorDate() &&
      this.tableDataSignal().length > 0,
  );

  displayedColumns = ['name', 'surname', 'date', 'nazioni', 'city', 'gender'];

  columnsDataSignal: TableColumnConfig[] = [
    { key: 'name', title: 'tabelle-section.table.title.name' },
    { key: 'surname', title: 'tabelle-section.table.title.surname' },
    { key: 'date', title: 'tabelle-section.table.title.date' },
    { key: 'nazioni', title: 'tabelle-section.table.title.nation' },
    { key: 'city', title: 'tabelle-section.table.title.city' },
    { key: 'gender', title: 'tabelle-section.table.title.gender' },
  ];

  searchForm = new FormGroup<AnagraficaForm>({
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
    this.tipologicheService
      .getNazioni()
      .pipe(
        tap(res => {
          this.nazioniOptions.set(res);
        }),
      )
      .subscribe();

    this.tipologicheService
      .getCitta()
      .pipe(
        tap(res => {
          this.cityOptions.set(res);
        }),
      )
      .subscribe();

    this.tipologicheService
      .getGender()
      .pipe(
        tap(res => {
          this.genderOptions.set(res);
        }),
      )
      .subscribe();
  }

  onSearch() {
    this.hasSearched.set(true);
    this.errorDate.set(false);

    const dateForm = this.searchForm.controls.date.value?.split('/');
    if (dateForm) {
      if (Number(dateForm[2]) < 1990) {
        this.errorDate.set(true);
      } else {
        this.errorDate.set(false);
        this.isLoading.set(true);
        this.getUsersTable();
      }
    }
  }

  getUsersTable() {
    this.usersTableService
      .getUsersTable()
      .pipe(
        tap(res => {
          this.tableDataSignal.set(res);
        }),
        catchError(() => {
          this.toastService.openToast({
            title: 'Errore',
            text: 'Non è stato possibile contattare il server',
            type: 'danger',
            delay: 5000,
          });
          // Restituisce un Observable che emette 'false' in caso di errore
          return of(EMPTY);
        }),
        finalize(() => this.isLoading.set(false)),
      )
      .subscribe();
  }

  onReset() {
    this.hasSearched.set(false);
    this.searchForm.reset();
    this.errorDate.set(false);
  }
}

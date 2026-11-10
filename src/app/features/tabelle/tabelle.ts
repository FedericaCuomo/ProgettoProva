import { UsersTableService } from './../../core/api-services/users-table/users-table.service';
import { TipologicheService } from './../../core/api-services/tipologiche/tipologiche.service';
import { TestService } from './../../core/api-services/test-api/test-api.service';
import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
  inject,
  OnInit,
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
import { catchError, of, tap } from 'rxjs';

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
export class Tabelle implements OnInit {
  public translate = inject(TranslateService);
  public testService = inject(TestService);
  public tipologicheService = inject(TipologicheService);
  public UsersTableService = inject(UsersTableService);
  readonly toastService = inject(SirioToastService);

  traduzioneProva = signal<string>('ciao');
  nomeAttuale = computed<string>(() => {
    const loading = this.isLoading();
    const nome = loading ? 'sconosciuto' : 'federica';
    return this.translate.instant('SHARED.form.name.label', {
      nome,
    });
  });

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
    () => this.hasSearched() && !this.isLoading() && !this.errorDate(),
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
    this.traduzioneProva.set(
      this.translate.instant('SHARED.form.name.placeholder', {
        nome: 'federica',
      }),
    );

    // this.tipologicheService.getNazioni().subscribe({
    //   next: res => {
    //     this.nazioniOptions.set(res);
    //   },
    // });

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

  ngOnInit(): void {
    console.log('onInit');
  }

  onSearch() {
    this.hasSearched.set(true);
    this.isLoading.set(true);
    this.errorDate.set(false);
    setTimeout(() => {
      this.isLoading.set(false);

      const dateForm = this.searchForm.controls.date.value?.split('/');
      if (dateForm) {
        if (Number(dateForm[2]) < 1990) {
          this.errorDate.set(true);
        } else {
          this.errorDate.set(false);
        }
      }
    }, 3000);

    this.UsersTableService.getUsersTable()
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
          return of(false);
        }),
      )
      .subscribe();
  }

  onReset() {
    this.hasSearched.set(false);
    this.searchForm.reset();
    this.errorDate.set(false);
  }

  //  Metodo per gestire la risposta al servizio PROVA
  // onLoad() {
  //   this.isLoading.set(true);
  //   this.testService.call().subscribe({
  //     next: res => {
  //       this.isLoading.set(false);
  //       this.text.set(res.test);
  //     },
  //   });
  // }
}

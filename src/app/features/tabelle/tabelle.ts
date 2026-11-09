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
  SirioTableComponent,
  TableColumnConfig,
  TableConfig,
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
} from 'ngx-sirio-lib-20';
import { AnagraficaForm } from './models/table.model';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Loader } from '../../shared/components/loader/loader';
import { Opzioni } from '../../core/api-services/tipologiche/tipologiche.model';
import { tap } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-tabelle',
  imports: [
    SirioInputComponent,
    ReactiveFormsModule,
    TranslatePipe,
    SirioDatepickerComponent,
    SirioTableComponent,
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
  ],
  templateUrl: './tabelle.html',
  styleUrl: './tabelle.scss',
})
export class Tabelle implements OnInit {
  public translate = inject(TranslateService);
  public testService = inject(TestService);
  public tipologicheService = inject(TipologicheService);

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
  text = signal<string>('');
  hasSearched = signal<boolean>(false);
  isLoading = signal<boolean>(false);
  errorDate = signal<boolean>(false);
  showTable = computed<boolean>(
    () => this.hasSearched() && !this.isLoading() && !this.errorDate(),
  );

  // tabella
  tableDataSignal: TableData[] = [
    {
      name: 'Jhon',
      surname: 'Smith',
      date: '02/08/1993',
    },
    {
      name: 'Alice',
      surname: 'Brown',
      date: '17/02/1998',
    },
    {
      name: 'Bob',
      surname: 'Johnson',
      date: '22/11/2000',
    },
  ];

  columnsDataSignal: TableColumnConfig[] = [
    {
      key: 'name',
      title: 'Name',
    },
    {
      key: 'surname',
      title: 'Surname',
    },
    {
      key: 'date',
      title: 'Date',
    },
  ];

  tableSetup: TableConfig = {
    data: this.tableDataSignal,
    columns: this.columnsDataSignal,
  };
  // --fine tabella

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
    gender: new FormControl<string | null>(''),
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

  onLoad() {
    this.isLoading.set(true);
    this.testService.call().subscribe({
      next: res => {
        this.isLoading.set(false);
        this.text.set(res.test);
      },
    });
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

    console.log('nome:', this.searchForm.controls.name.value);
    console.log('cognome:', this.searchForm.controls.surname.value);
    console.log('data:', this.searchForm.controls.date.value);
    console.log('form:', this.searchForm.value);
  }

  onReset() {
    this.hasSearched.set(false);
    this.searchForm.reset();
    this.errorDate.set(false);
  }
}

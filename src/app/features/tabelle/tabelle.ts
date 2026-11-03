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
} from 'ngx-sirio-lib-20';
import { AnagraficaForm } from './models/table.model';
import { TranslatePipe } from '@ngx-translate/core';
import { Loader } from '../../shared/components/loader/loader';
import { Nazioni } from '../../core/api-services/tipologiche/tipologiche.model';

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
  ],
  templateUrl: './tabelle.html',
  styleUrl: './tabelle.scss',
})
export class Tabelle implements OnInit {
  public testService = inject(TestService);
  public tipologicheService = inject(TipologicheService);

  nazioniOptions = signal<Nazioni[]>([]);
  text = signal<string>('');
  hasSearched = signal<boolean>(false);
  // showTable = signal<boolean>(false);
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
    nazioni: new FormControl<string | null>(''),
  });

  constructor() {
    this.tipologicheService.getNazioni().subscribe({
      next: res => {
        this.nazioniOptions.set(res);
      },
    });
  }

  ngOnInit(): void {
    console.log('onInit');
  }

  onLoad() {
    this.testService.call().subscribe({
      next: res => {
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

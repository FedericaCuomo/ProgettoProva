import { TabelleStore } from './store/tabelle.store';
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
import { UserTableRequest } from '../../core/api-services/users-table/users-table.model';

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
  providers: [TabelleStore],
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
  readonly tabelleStore = inject(TabelleStore);

  nazioniOptions = computed(() => this.tabelleStore.nazioniOptions());
  cityOptions = computed(() => this.tabelleStore.cityOptions());
  genderOptions = computed(() => this.tabelleStore.genderOptions());
  tableDataSignal = computed(() => this.tabelleStore.usersTable());

  text = signal<string>('');
  hasSearched = signal<boolean>(false);
  errorDate = signal<boolean>(false);
  errorServiceTable = signal<boolean>(false);
  showTable = computed<boolean>(() => this.hasSearched() && !this.errorDate());

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

  onSearch() {
    this.hasSearched.set(true);
    this.errorDate.set(false);

    const dateForm = this.searchForm.controls.date.value?.split('/');
    if (dateForm) {
      if (Number(dateForm[2]) < 1990) {
        this.errorDate.set(true);
      } else {
        this.errorDate.set(false);

        const { name, surname, date, nazioni, city, gender } =
          this.searchForm.value;
        // console.log('form Value:', this.searchForm.value);
        // console.log('form Value name:', this.searchForm.value.name);

        const requestData: UserTableRequest = {
          name: name || '',
          surname: surname || '',
          date: date || '',
          nazioni: nazioni || '',
          city: city || '',
          gender: gender || '',
        };
        this.tabelleStore.loadUsersTable(requestData);
      }
    }
  }

  onReset() {
    this.hasSearched.set(false);
    this.searchForm.reset();
    this.errorDate.set(false);
  }
}

import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SirioInputComponent, SirioButtonComponent } from 'ngx-sirio-lib-20';
import { AnagraficaForm } from './models/table.model';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-tabelle',
  imports: [
    SirioInputComponent,
    ReactiveFormsModule,
    SirioButtonComponent,
    TranslatePipe,
  ],
  templateUrl: './tabelle.html',
  styleUrl: './tabelle.scss',
})
export class Tabelle {
  private translate = inject(TranslateService);

  constructor() {
    this.translate.addLangs(['it', 'en']);
    // this.translate.use('en');
  }

  searchForm = new FormGroup<AnagraficaForm>({
    name: new FormControl<string | null>('', [Validators.required]),
    surname: new FormControl<string | null>('', [Validators.required]),
  });

  onSearch() {
    console.log('nome:', this.searchForm.controls.name.value);
    console.log('cognome:', this.searchForm.controls.surname.value);
  }

  onReset() {
    this.searchForm.reset();
  }
}

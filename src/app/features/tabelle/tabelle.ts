import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SirioInputComponent, SirioButtonComponent } from 'ngx-sirio-lib-20';
import { AnagraficaForm } from './models/table.model';
import { TranslatePipe } from '@ngx-translate/core';

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
  searchForm = new FormGroup<AnagraficaForm>({
    name: new FormControl<string | null>('', [Validators.required]),
    surname: new FormControl<string | null>('', [Validators.required]),
    date: new FormControl<string | null>('', [Validators.required]),
  });

  onSearch() {
    console.log('nome:', this.searchForm.controls.name.value);
    console.log('cognome:', this.searchForm.controls.surname.value);
  }

  onReset() {
    this.searchForm.reset();
  }
}

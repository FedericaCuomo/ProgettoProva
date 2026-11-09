import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { AnagraficaForm } from '../tabelle/models/table.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-prova',
  imports: [TranslatePipe, ReactiveFormsModule],
  templateUrl: './prova.html',
  styleUrl: './prova.scss',
})
export class Prova {
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
    gender: new FormControl<string | null>(''),
  });

  onReset() {
    this.formProva.reset();
  }
}

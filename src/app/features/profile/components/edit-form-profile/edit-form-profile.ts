import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  FormControl,
  Validators,
  ɵInternalFormsSharedModule,
} from '@angular/forms';
import {
  SirioDialogComponent,
  SirioDialogHeaderComponent,
  SirioDialogTitleComponent,
  SirioDialogBodyComponent,
  SirioDialogFooterComponent,
  SirioButtonComponent,
  SirioDialogElement,
  SirioInputComponent,
  SirioValidationDirective,
} from 'ngx-sirio-lib-20';
import { FormGroup, ReactiveFormsModule } from '@angular/forms'; // <-- 1. Importiamo i moduli dei Reactive Forms
import { CardField, UserType } from '../../../../types';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-edit-form-profile',
  imports: [
    SirioDialogComponent,
    SirioDialogHeaderComponent,
    SirioDialogTitleComponent,
    SirioDialogFooterComponent,
    SirioButtonComponent,
    ɵInternalFormsSharedModule,
    SirioDialogBodyComponent,
    SirioInputComponent,
    ReactiveFormsModule,
    SirioValidationDirective,
  ],
  templateUrl: './edit-form-profile.html',
})
export class EditProfileDialog extends SirioDialogElement {
  // variabile di tipo FormGroup. inizializzata dopo
  form!: FormGroup;

  // serve per prendere i dati dal padre (cardProfile) - solo lettura e viene specificata la struttura di questi dati
  get profileData() {
    return this.data as {
      user: UserType;
      cardFields: CardField[];
      title: string;
    };
  }

  // senza ngoninit i dati passati dal padre (this.profileData) potrebbero non essere ancora pronti
  ngOnInit(): void {
    // serve per creare dinamicamente il formGroup.
    // Record serve a definire la forma di un oggetto specificando che tipo di chiavi e valori conterrà
    const formControlsConfig: Record<string, FormControl<string | null>> = {};

    // dai dati che entrano in input iteriamo sui campi della card e stampiamo il valore legato allo stesso campo dell'utente
    this.profileData.cardFields.forEach(field => {
      const currentValue = this.profileData.user[field.key] || '';
      formControlsConfig[field.key] = new FormControl(currentValue, {
        validators: [Validators.required],
      });
    });

    // Angular crea automaticamente il form completo, collegando ogni input al suo rispettivo controllo, senza scrivere a mano il codice
    this.form = new FormGroup(formControlsConfig);
  }

  closeEvent() {
    this.sirioDialogService.closeDialog();
  }

  // afterClosed$$ è un emitter reattivo che serve a emettere un valore verso il componente che ha aperto il dialog
  onConfirm() {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      const updatedUserData = {
        ...this.profileData.user,
        ...this.form.value,
      };

      this.afterClosed$$.next(updatedUserData);
      this.sirioDialogService.closeDialog();
    }
  }
}

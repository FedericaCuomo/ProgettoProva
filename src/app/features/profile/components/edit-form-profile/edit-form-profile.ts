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
  form!: FormGroup;

  // serve per prendere i dati dal padre - solo lettura
  get profileData() {
    return this.data as {
      user: UserType;
      cardFields: CardField[];
      title: string;
    };
  }

  ngOnInit(): void {
    const formControlsConfig: Record<string, FormControl<string | null>> = {};

    this.profileData.cardFields.forEach(field => {
      const currentValue = this.profileData.user[field.key] || '';
      formControlsConfig[field.key] = new FormControl(currentValue, {
        validators: [Validators.required],
      });
    });
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

import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  SirioDialogComponent,
  SirioDialogBodyComponent,
  SirioDialogHeaderComponent,
  SirioDialogFooterComponent,
  SirioDialogActionDirective,
  SirioDialogTitleComponent,
  SirioInputComponent,
  SirioSelectComponent,
  SirioSelectPanelComponent,
  SirioSelectOptionComponent,
  SirioButtonComponent,
  SirioDialogElement,
  SirioValidationDirective,
} from 'ngx-sirio-lib-20';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-add-service-form',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SirioDialogComponent,
    SirioDialogBodyComponent,
    SirioDialogHeaderComponent,
    SirioDialogFooterComponent,
    SirioDialogActionDirective,
    SirioDialogTitleComponent,
    SirioInputComponent,
    SirioSelectComponent,
    SirioSelectPanelComponent,
    SirioSelectOptionComponent,
    SirioButtonComponent,
    SirioValidationDirective,
  ],
  templateUrl: './add-service-form.html',
  styleUrl: './add-service-form.scss',
})

// estendendo la classe si ottiene l'accesso a strumenti gestiti internamente dalla libreria
export class AddServiceForm extends SirioDialogElement {
  reactiveForm: FormGroup = new FormGroup({
    serviceName: new FormControl(null, Validators.required),
    serviceIcon: new FormControl(null, Validators.required),
    serviceText: new FormControl(null, Validators.required),
    serviceCategory: new FormControl(null, Validators.required),
  });

  // chiusura del form tramite x
  closeEvent() {
    this.sirioDialogService.closeDialog();
  }

  // Gestisce il click sul tasto Salva/Conferma
  onConfirm() {
    this.reactiveForm.markAllAsTouched();
  }
}

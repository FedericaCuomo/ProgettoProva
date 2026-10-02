import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  SirioInputComponent,
  SirioSelectComponent,
  SirioSelectPanelComponent,
  SirioSelectOptionComponent,
  SirioButtonComponent,
} from 'ngx-sirio-lib-20';
import { ServicesType } from '../../../../types';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ServiziForniti } from '../../../../shared/services/servizi-forniti';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-service-form',
  imports: [
    SirioInputComponent,
    SirioSelectComponent,
    SirioSelectPanelComponent,
    SirioSelectOptionComponent,
    SirioButtonComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './new-service-form.html',
  styleUrl: './new-service-form.scss',
})
export class NewServiceForm {
  private serviziF = inject(ServiziForniti);
  //mando l'evento del click del button annulla
  @Output() cancel = new EventEmitter<void>();
  @Output() nuovoServizio = new EventEmitter<ServicesType>();

  errore: string = '';

  reactiveForm: FormGroup = new FormGroup({
    serviceName: new FormControl(null, Validators.required),
    serviceIcon: new FormControl(null, Validators.required),
    serviceText: new FormControl(null, Validators.required),
    serviceCategory: new FormControl(null, Validators.required),
  });

  //metodo annullamento form
  onCancel(): void {
    this.cancel.emit();
  }

  onAddNewService() {
    this.reactiveForm.markAllAsTouched();
    if (this.reactiveForm.invalid) {
      this.errore = 'Compila tutti i campi obblicatori';
    } else {
      const formValues = this.reactiveForm.value;

      const newService: ServicesType = {
        name: formValues.serviceName,
        icon: formValues.serviceIcon,
        text: formValues.serviceText,
        category: formValues.serviceCategory,
      };

      this.serviziF.addService(newService);
      this.onCancel();
    }
  }
}

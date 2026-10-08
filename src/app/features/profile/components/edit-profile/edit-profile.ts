import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SirioInputComponent, SirioButtonComponent } from 'ngx-sirio-lib-20';
import { CardField } from '../../../../types';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-edit-profile',
  imports: [SirioInputComponent, FormsModule, SirioButtonComponent],
  templateUrl: './edit-profile.html',
})
export class EditProfile {
  @Input({ required: true }) fields: CardField[] = [];
  // emette l'evento quando l'utente clicca su annulla
  @Output() cancelForm = new EventEmitter();

  onCancelForm() {
    this.cancelForm.emit();
  }
}

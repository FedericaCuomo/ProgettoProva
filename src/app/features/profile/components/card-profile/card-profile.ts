import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CardField, UserType } from '../../../../types';
import { SirioInputComponent, SirioButtonComponent } from 'ngx-sirio-lib-20';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-profile',
  imports: [
    SirioInputComponent,
    SirioButtonComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './card-profile.html',
  styleUrl: './card-profile.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardProfileComponent {
  @Input({ required: true }) user!: UserType;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) icon!: string;
  @Input({ required: true }) cardField!: CardField[];

  isEditing = false;

  onEdit() {
    this.isEditing = true;
  }
  // creo un formGroup vuoto
  // formDati: FormGroup = new FormGroup({});
}

import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  Input,
  output,
} from '@angular/core';
import { CardField, UserType } from '../../../../types';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { SirioDialogService } from 'ngx-sirio-lib-20';
import { EditProfileDialog } from '../edit-form-profile/edit-form-profile';
@Component({
  selector: 'app-card-profile',
  imports: [FormsModule, ReactiveFormsModule, NgClass],
  templateUrl: './card-profile.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardProfileComponent {
  // serve per utilizzare il service dei dialog in questo componente
  private dialogService = inject(SirioDialogService);

  // @Input({ required: true }) user!: UserType;
  user = input<UserType>();
  @Input({ required: true }) title!: string;
  @Input({ required: true }) icon!: string;
  @Input({ required: true }) cardField!: CardField[];

  userUpdated = output<UserType>();

  // passo al Dialog quei dati in ingresso.
  // Subscribe - appena il popup viene chiuso, il codice dentro la parentesi viene eseguito e riceve una variabile chiamata result
  onEdit() {
    this.dialogService
      .openDialog(EditProfileDialog, {
        user: this.user(),
        cardFields: this.cardField,
        title: this.title,
      })
      .afterClosed()
      .subscribe(result => {
        if (result) {
          this.userUpdated.emit(result);
        }
      });
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  Input,
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
  user = input<UserType>();
  // @Input({ required: true }) user!: UserType;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) icon!: string;
  @Input({ required: true }) cardField!: CardField[];
  private dialogService = inject(SirioDialogService);

  onEdit() {
    this.dialogService
      .openDialog(EditProfileDialog, {
        user: this.user(),
        cardFields: this.cardField,
        title: this.title,
      })
      .afterClosed();
  }
}

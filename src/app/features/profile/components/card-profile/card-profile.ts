import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CardField, UserType } from '../../../../types';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { EditProfile } from '../edit-profile/edit-profile';
@Component({
  selector: 'app-card-profile',
  imports: [FormsModule, ReactiveFormsModule, NgClass, EditProfile],
  templateUrl: './card-profile.html',
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

  closeEdit() {
    this.isEditing = false;
  }
}

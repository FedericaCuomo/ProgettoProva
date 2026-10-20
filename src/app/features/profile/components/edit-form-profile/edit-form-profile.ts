import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ɵInternalFormsSharedModule } from '@angular/forms';
import {
  SirioDialogComponent,
  SirioDialogHeaderComponent,
  SirioDialogTitleComponent,
  SirioDialogBodyComponent,
  SirioDialogFooterComponent,
  SirioButtonComponent,
  SirioDialogElement,
  SirioInputComponent,
} from 'ngx-sirio-lib-20';
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
  ],
  templateUrl: './edit-form-profile.html',
})
export class EditProfileDialog extends SirioDialogElement {
  get profileData() {
    return this.data as {
      user: UserType;
      cardFields: CardField[];
      title: string;
    };
  }

  ngOnInit(): void {
    console.log(this.data);
  }

  closeEvent() {
    this.sirioDialogService.closeDialog();
  }

  onConfirm() {
    this.afterClosed$$.next(this.data);
    this.sirioDialogService.closeDialog();
  }
}

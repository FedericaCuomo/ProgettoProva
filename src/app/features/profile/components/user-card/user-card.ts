import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { UserType } from '../../../../types';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
})
export class UserCard {
  // @Input({ required: true }) user!: UserType;

  // input signal
  user = input<UserType>();
}

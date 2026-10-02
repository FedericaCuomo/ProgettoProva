import { Component, Input } from '@angular/core';
import { UserType } from '../../../../types';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.scss',
})
export class UserCard {
  @Input({ required: true }) user!: UserType;
}

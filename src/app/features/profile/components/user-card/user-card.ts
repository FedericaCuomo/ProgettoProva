import {
  Component,
  ChangeDetectionStrategy,
  inject,
  input,
} from '@angular/core';
import { ProfileService } from '../../../../core/api-services/profilo/profilo.service';
import { UserProfile } from '../../../../core/api-services/profilo/profilo.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
})
export class UserCard {
  public profileService = inject(ProfileService);
  user = input<UserProfile>();
}

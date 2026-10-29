import {
  Component,
  EventEmitter,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SirioCardComponent,
  SirioCardSubtitleComponent,
  SirioCardTitleComponent,
  SirioCardBodyComponent,
  SirioInputComponent,
  SirioButtonComponent,
} from 'ngx-sirio-lib-20';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-hero',
  imports: [
    FormsModule,
    SirioCardComponent,
    SirioInputComponent,
    SirioCardSubtitleComponent,
    SirioCardTitleComponent,
    SirioCardBodyComponent,
    SirioButtonComponent,
    TranslatePipe,
  ],
  templateUrl: './hero.html',
})
export class Hero {
  searchText = '';
  @Output() serach = new EventEmitter<string>();

  onSearch() {
    this.serach.emit(this.searchText);
  }
}

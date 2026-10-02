import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SirioCardComponent,
  SirioCardSubtitleComponent,
  SirioCardTitleComponent,
  SirioCardBodyComponent,
  SirioInputComponent,
  SirioButtonComponent,
} from 'ngx-sirio-lib-20';

@Component({
  selector: 'app-hero',
  imports: [
    FormsModule,
    SirioCardComponent,
    SirioInputComponent,
    SirioCardSubtitleComponent,
    SirioCardTitleComponent,
    SirioCardBodyComponent,
    SirioButtonComponent,
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  searchText: string = '';
  @Output() serach = new EventEmitter<string>();

  onSearch() {
    this.serach.emit(this.searchText);
  }
}

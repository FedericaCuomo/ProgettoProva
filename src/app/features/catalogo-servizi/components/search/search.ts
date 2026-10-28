import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { NgxSirioEvent, SirioSearchbarComponent } from 'ngx-sirio-lib-20';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-search',
  imports: [SirioSearchbarComponent],
  templateUrl: './search.html',
})
export class Search {
  @Output() search = new EventEmitter<string>();

  onSearch(event: NgxSirioEvent<SirioSearchbarComponent>) {
    this.search.emit(event.data);
  }
}

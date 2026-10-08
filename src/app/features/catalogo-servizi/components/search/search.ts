import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SirioSearchbarComponent } from 'ngx-sirio-lib-20';
import { FormsModule } from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-search',
  imports: [SirioSearchbarComponent, FormsModule],
  templateUrl: './search.html',
})
export class Search {}

import { Component, EventEmitter, Output } from '@angular/core';
import { SirioSearchbarComponent } from 'ngx-sirio-lib-20';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [SirioSearchbarComponent, FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search {}

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-prova',
  imports: [TranslatePipe],
  templateUrl: './prova.html',
  styleUrl: './prova.scss',
})
export class Prova {}

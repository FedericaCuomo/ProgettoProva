import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SirioInputComponent, SirioButtonComponent } from 'ngx-sirio-lib-20';

@Component({
  selector: 'app-edit-profile',
  imports: [SirioInputComponent, FormsModule, SirioButtonComponent],
  templateUrl: './edit-profile.html',
  styleUrl: './edit-profile.scss',
})
export class EditProfile {}

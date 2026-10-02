import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuType } from '../../../types';
import {
  SirioDropdownComponent,
  SirioDropdownPanelComponent,
  SirioDropdownOptionComponent,
  SirioButtonComponent,
} from 'ngx-sirio-lib-20';

@Component({
  selector: 'app-side-bar',
  imports: [
    RouterLink,
    SirioDropdownComponent,
    SirioDropdownPanelComponent,
    SirioDropdownOptionComponent,
    RouterLinkActive,
    SirioButtonComponent,
  ],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.scss',
})
export class SideBar {
  openMenu: boolean = false;
  menu: MenuType[] = [
    { name: 'home', icon: 'fa-solid fa-house', id: 'm1' },
    { name: 'servizi', icon: 'fa-solid fa-rectangle-list', id: 'm2' },
    { name: 'domande', icon: 'fa-solid fa-comment', id: 'm3' },
    { name: 'profilo', icon: 'fa-solid fa-circle-user', id: 'm4' },
    { name: 'assistenza', icon: 'fa-solid fa-circle-question', id: 'm5' },
    { name: 'impostazioni', icon: 'fa-solid fa-gear', id: 'm6' },
  ];
}

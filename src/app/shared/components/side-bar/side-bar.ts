import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuType } from '../../../types';
import { SirioButtonComponent } from 'ngx-sirio-lib-20';
import { NgClass } from '@angular/common';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-side-bar',
  imports: [RouterLink, RouterLinkActive, SirioButtonComponent, NgClass],
  templateUrl: './side-bar.html',
})
export class SideBar {
  openMenu = false;
  menu: MenuType[] = [
    { name: 'home', icon: 'fa-solid fa-house', id: 'm1' },
    { name: 'servizi', icon: 'fa-solid fa-rectangle-list', id: 'm2' },
    { name: 'domande', icon: 'fa-solid fa-comment', id: 'm3' },
    { name: 'profilo', icon: 'fa-solid fa-circle-user', id: 'm4' },
    { name: 'assistenza', icon: 'fa-solid fa-circle-question', id: 'm5' },
    { name: 'impostazioni', icon: 'fa-solid fa-gear', id: 'm6' },
  ];
}

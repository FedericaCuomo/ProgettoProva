import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuType } from '../../../types';
import { SirioButtonComponent } from 'ngx-sirio-lib-20';
import { NgClass } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-side-bar',
  imports: [
    TranslatePipe,
    RouterLink,
    RouterLinkActive,
    SirioButtonComponent,
    NgClass,
  ],
  templateUrl: './side-bar.html',
})
export class SideBar {
  openMenu = false;
  menu: MenuType[] = [
    { name: 'home', icon: 'fa-solid fa-house', id: 'm1' },
    { name: 'service', icon: 'fa-solid fa-rectangle-list', id: 'm2' },
    { name: 'question', icon: 'fa-solid fa-comment', id: 'm3' },
    { name: 'profile', icon: 'fa-solid fa-circle-user', id: 'm4' },
    { name: 'support', icon: 'fa-solid fa-circle-question', id: 'm5' },
    { name: 'settings', icon: 'fa-solid fa-gear', id: 'm6' },
    { name: 'tables', icon: 'fa-solid fa-table', id: 'm7' },
  ];
}

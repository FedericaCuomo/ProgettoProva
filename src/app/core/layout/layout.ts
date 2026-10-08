import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Header } from '../../shared/components/header/header';
import { SideBar } from '../../shared/components/side-bar/side-bar';
import { RouterOutlet } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-layout',
  imports: [SideBar, Header, RouterOutlet],
  templateUrl: './layout.html',
})
export class Layout {}

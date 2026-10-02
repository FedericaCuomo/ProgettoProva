import { Component } from '@angular/core';
import { Header } from '../../shared/components/header/header';
import { SideBar } from '../../shared/components/side-bar/side-bar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [SideBar, Header, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {}

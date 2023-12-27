import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { NavigationMenu } from './navigation-menu.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'klm-navigation-menu',
  standalone: true,
  imports: [ MatListModule, CommonModule, RouterModule],
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.scss'
})
export class NavigationMenuComponent {
  headerNavArray: NavigationMenu[];
  constructor(){

    this.headerNavArray =  [
      {
        label: 'Home',
        link:'/home'
      },
      {
        label: 'My Trip',
        link:'/my-trip'
      },
      {
        label: 'Check-in',
        link:'/check-in'
      },
      {
        label: 'Information',
        link:'/information'
      },
    ]
  }
}

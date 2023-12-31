import { Component } from '@angular/core';
import { NavigationMenuComponent } from '../navigation-menu/navigation-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../shared/services/auth-service';
import { CommonModule } from '@angular/common';
import  data from '../../../assets/json/labels.json';
import  constants from '../../../assets/json/constants.json'

@Component({
  selector: 'klm-header',
  standalone: true,
  imports: [ 
    NavigationMenuComponent, 
    MatIconModule,
    RouterLink,
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isLoggedIn: boolean;
  labelData: any

  constructor(
    private router: Router,
    public authService: AuthService){
    this.labelData = data.HeaderComponent;
    this.isLoggedIn = localStorage.getItem(constants['USER_TOKEN']) === null;
  }
  logOut(): void {
    this.authService.logout();
    this.router.navigate(['']);
  }

}

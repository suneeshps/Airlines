import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { FooterNavigation } from './footer-navigation.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'klm-footer',
  standalone: true,
  imports: [MatListModule, RouterModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  footerNavArray: FooterNavigation[];
  legalNavArray: FooterNavigation[];

  constructor() {

    this.footerNavArray = [
      {
        label: 'Contact Us',
        link: '/contact-us'
      },
      {
        label: 'About KLM',
        link: '/about'
      },
      {
        label: 'Deals',
        link: '/deals'
      },
      {
        label: 'Download the app',
        link: '/information'
      }
    ];

    this.legalNavArray = [
      {
        label: 'Legal Information',
        link: '/legal-information'
      },
      {
        label: 'Privacy policy',
        link: '/privacy-policy'
      },
      {
        label: 'Accessability statement',
        link: '/accessability-statement'
      },
      {
        label: '© 2023 KLM'
      },
      {
        label: 'Cookie Settings',
        link: '/cookie-settings'
      }
    ];
  }

}

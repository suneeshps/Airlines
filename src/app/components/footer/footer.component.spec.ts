import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

const footerNavArray = [
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

const legalNavArray = [
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
describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FooterComponent,
        RouterTestingModule
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain footer nav and legal nav', () => {
    component.footerNavArray = footerNavArray;
    component.legalNavArray = legalNavArray
    fixture.detectChanges();
    const navElement = fixture.debugElement.query(By.css('nav'));
    expect(navElement).toBeTruthy();
  });
});

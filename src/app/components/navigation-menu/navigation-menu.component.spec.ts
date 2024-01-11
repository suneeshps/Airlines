import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationMenuComponent } from './navigation-menu.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

const headerNavArray =  [
  {
    label: 'Home',
    link:''
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

describe('NavigationMenuComponent', () => {
  let component: NavigationMenuComponent;
  let fixture: ComponentFixture<NavigationMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NavigationMenuComponent,
        RouterTestingModule
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain navigation menu', () => {
    component.headerNavArray = headerNavArray;
    fixture.detectChanges();
    const navElement = fixture.debugElement.query(By.css('.klm-navigation-menu__item'));
    expect(navElement).toBeTruthy();
  });
});

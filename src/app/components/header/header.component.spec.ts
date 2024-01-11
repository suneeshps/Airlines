import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HeaderComponent,
        RouterTestingModule
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain navigation menu', () => {
    fixture.detectChanges();
    const navElement = fixture.debugElement.query(By.css('.klm-header__bottom-header'));
    expect(navElement).toBeTruthy();
  });
  it('should logout the user when logout button is clicked', () => {
    component.logOut();
    fixture.detectChanges();
    const navElement = fixture.debugElement.query(By.css('.klm-header__top-header__logo__right__login'));
    expect(navElement).toBeTruthy();
  });
});

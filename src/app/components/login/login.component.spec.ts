import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LoginComponent,
        RouterTestingModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should check initial form values', () => {
    const loginFormGroup = component.loginForm;
    const loginFormValues = {
      userName: '',
      password: ''
    };

    expect(loginFormGroup.value).toEqual(loginFormValues);
  });

  it('should disable the login button if form is not filled', () => {
    expect(fixture.debugElement.nativeElement.querySelector("input[type='submit']").disabled).toBeTruthy();
  });
  
  it('should enable the login button if form is valid', () => {
    const loginFormGroup = component.loginForm;
    const loginFormValues = {
      userName: 'test@test.com',
      password: 'test@1234',
    };
    loginFormGroup.patchValue(loginFormValues);
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector("input[type='submit']").disabled).toBeFalsy();
  });
});

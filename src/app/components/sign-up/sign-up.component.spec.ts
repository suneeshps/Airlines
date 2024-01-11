import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SignUpComponent,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check initial form values', () => {
    const signUpFormGroup = component.signUpForm;
    const signUpFormValues = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: ''
    };

    expect(signUpFormGroup.value).toEqual(signUpFormValues);
  });

  it('should disable the sign up button if form is not filled', () => {
    expect(fixture.debugElement.nativeElement.querySelector("input[type='submit']").disabled).toBeTruthy();
  });
  
  it('should enable the sign up button if form is valid', () => {
    const signUpFormGroup = component.signUpForm;
    const signUpFormValues = {
      firstName: 'test',
      lastName: 'test',
      email: 'test@test.com',
      phoneNumber: '134134134134',
      password: 'test@1234',
      confirmPassword: 'test@1234'
    };
    signUpFormGroup.patchValue(signUpFormValues);
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector("input[type='submit']").disabled).toBeFalsy();
  });

});

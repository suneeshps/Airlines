import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengersFormComponent } from './passengers-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('PassengersFormComponent', () => {
  let component: PassengersFormComponent;
  let fixture: ComponentFixture<PassengersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PassengersFormComponent,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PassengersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should passenger group from disabled by default', () => {
    expect(component.passengersFormGroup.valid).toBeFalse();
  });
  it('should passenger group from enabled if values are entered', () => {
    component.passengersFormGroup.patchValue({
      countryCode: 0,
      email: "test@test.com",
      firstName: "test",
      genderCategory: 0,
      lastName: "test",
      telephoneNumber: 98234234234
    })
    fixture.detectChanges();
    expect(component.passengersFormGroup.valid).toBeTrue();
  });

});

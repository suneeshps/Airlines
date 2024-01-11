import { Component, EventEmitter, Output } from '@angular/core';
import { Form, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import labels from '../../../../assets/json/labels.json';
import { CommonModule, NgFor } from '@angular/common';
import { GenderPrefix } from '../../../shared/interfaces/gender-prefix.interface';
import { CountryCode } from '../../../shared/interfaces/country-code.interface';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'klm-passengers-form',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
  ],
  templateUrl: './passengers-form.component.html',
  styleUrl: './passengers-form.component.scss'
})
export class PassengersFormComponent {
  passengersFormGroup: FormGroup;
  labelData: any;
  genderCategories: GenderPrefix[];
  countryCodes: CountryCode[];

  @Output() onPassengerSelection = new EventEmitter<any>();


  constructor(private formBuilder: FormBuilder) {
    this.labelData = labels.flighListComponent;
    this.passengersFormGroup = this.formBuilder.group({
      genderCategory: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephoneNumber: ['', Validators.required],
      countryCode: ['', Validators.required]
    });
    this.genderCategories = [
      {
        label: 'Mr',
        value: 0
      },
      {
        label: 'Mrs',
        value: 1
      }
    ];
    this.countryCodes = [
      {
        label: 'India (+91)',
        value: 0
      },
      {
        label: 'Netherlands (+31)',
        value: 1
      }
    ];
  }
  onPassengersSelection() {
    this.onPassengerSelection.emit(this.passengersFormGroup);
  }

}

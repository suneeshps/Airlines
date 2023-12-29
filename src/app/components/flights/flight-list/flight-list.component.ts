import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightsService } from '../../../shared/services/flights.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FlightList } from '../../../shared/interfaces/flight-list.interface';
import { MatStepperModule } from '@angular/material/stepper';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { GenderPrefix } from '../../../shared/interfaces/gender-prefix.interface';
import { MatSelectModule } from '@angular/material/select';
import { CountryCode } from '../../../shared/interfaces/country-code.interface';
import { MatRadioModule } from '@angular/material/radio';
import * as data from '../../../../assets/json/labels.json';

@Component({
  selector: 'klm-flight-list',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule
  ],
  templateUrl: './flight-list.component.html',
  styleUrl: './flight-list.component.scss'
})
export class FlightListComponent implements OnInit {
  flightList?: FlightList[];
  returnFlightList?: FlightList[];
  labelDuration: string;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  searchParams : string | null;
  outboundFlight?: FlightList;
  returnFlight?: FlightList;
  genderCategories: GenderPrefix[];
  countryCodes: CountryCode[];
  paymentMethod?:string;
  paymentMethodSelected?: string;
  labelData: any;


  constructor(
    private route: ActivatedRoute,
    private flightService: FlightsService,
    private formBuilder: FormBuilder) {
    this.labelDuration = 'Duration';
    this.searchParams = this.route.snapshot.paramMap.get('searchParams');
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.thirdFormGroup = this.formBuilder.group({
      genderCategory: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      telephoneNumber: ['', Validators.required],
      countryCode: ['', Validators.required]
    });
    this.fourthFormGroup = this.formBuilder.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      postCode: ['', Validators.required],
      cardNumber: ['', Validators.required],
      securityCode: ['', Validators.required]
    });
    this.genderCategories = [
      {
        label: 'Mr',
        value:0
      },
      {
        label: 'Mrs',
        value:1
      }
    ];
    this.countryCodes = [
      {
        label: 'India (+91)',
        value:0
      },
      {
        label: 'Netherlands (+31)',
        value:1
      }
    ];
    this.labelData = data.flighListComponent;
  
  }

  ngOnInit() {
    this.flightService.getFlightList(this.searchParams).subscribe((data) => {
      this.flightList = data;
    });
  }
  getReturnFlightList(item: FlightList) {
    this.outboundFlight = item;
    this.flightService.getReturnFlightList(this.searchParams).subscribe((data) => {
      this.returnFlightList = data;
    });
  }

  goToPassengerDetails(item: FlightList){
    this.returnFlight = item;
  }
  selectPaymentMethod($event: any){
    this.paymentMethodSelected = $event.value
  }

}

import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightsService } from '../../shared/services/flights.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FlightList } from '../../shared/interfaces/flight-list.interface';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import labels from '../../../assets/json/labels.json';
import { FlightSelectionComponent } from '../flight-selection/flight-selection.component';
import { PassengersFormComponent } from '../passengers-form/passengers-form.component';
import { PaymentFormComponent } from '../payment-form/payment-form.component';
import { PaymentSuccessComponent } from '../payment-success/payment-success.component';
import { Observable } from 'rxjs';


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
    MatRadioModule,
    FlightSelectionComponent,
    PassengersFormComponent,
    PaymentFormComponent,
    PaymentSuccessComponent
  ],
  templateUrl: './flight-list.component.html',
  styleUrl: './flight-list.component.scss'
})
export class FlightListComponent implements OnInit {
  flightList!: FlightList[];
  returnFlightList!: FlightList[];
  outBoundFormGroup: FormGroup;
  returnFormGroup: FormGroup;
  passengerFormGroup: FormGroup;
  paymentFormGroup: FormGroup;
  searchParams: any;
  outboundFlight!: FlightList;
  returnFlight!: FlightList;
  paymentMethod?: string;
  paymentMethodSelected?: string;
  labelData: any;
  tripCategory: number;

  @ViewChild('stepper') private myStepper!: MatStepper;
  flightList$!: Observable<FlightList[]>;
  returnFlightList$!: Observable<FlightList[]>;



  constructor(
    private route: ActivatedRoute,
    private flightService: FlightsService,
    private formBuilder: FormBuilder) {
    this.searchParams = this.route.snapshot.paramMap.get('searchParams');
    this.tripCategory = JSON.parse(this.searchParams).tripCategory;
    this.outBoundFormGroup = this.formBuilder.group({
      outBoundCtrl: ['', Validators.required],
    });
    this.returnFormGroup = this.formBuilder.group({
      returnCtrl: ['', Validators.required],
    });
    this.passengerFormGroup = this.formBuilder.group({
      passengerCtrl: ['', Validators.required]
    });
    this.paymentFormGroup = this.formBuilder.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      postCode: ['', Validators.required],
      cardNumber: ['', Validators.required],
      securityCode: ['', Validators.required],
      paymentMethod: ['']
    });
    this.labelData = labels.flighListComponent;
  }

  ngOnInit() {
    this.flightList$ = this.flightService.getFlightList(this.searchParams);
  }
  getReturnFlightList(item: FlightList) {
    this.outboundFlight = item;
    this.returnFlightList$ = this.flightService.getReturnFlightList(this.searchParams);
    this.myStepper.next();
  }

  goToPassengerDetails(item: FlightList) {
    this.returnFlight = item;
    this.myStepper.next();
  }

  goToPaymentMethod($event: any){
    this.myStepper.next();
  }
  proceedPayment($event: any){
    this.myStepper.next();
  }

}

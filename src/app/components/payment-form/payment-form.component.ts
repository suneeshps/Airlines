import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import labels from '../../../assets/json/labels.json';
import { FlightList } from '../../shared/interfaces/flight-list.interface';

@Component({
  selector: 'klm-payment-form',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
  ],
  templateUrl: './payment-form.component.html',
  styleUrl: './payment-form.component.scss'
})
export class PaymentFormComponent {
  paymentFormGroup: FormGroup;
  labelData:any;
  paymentMethodSelected!: string;

  @Input() returnFlight?:FlightList;
  @Input() outboundFlight?:FlightList;
  @Output() onPaymentComplete = new EventEmitter<any>;

  constructor(private formBuilder: FormBuilder){

    this.labelData = labels.flighListComponent;
    this.paymentFormGroup = this.formBuilder.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      postCode: ['', Validators.required],
      cardNumber: ['', Validators.required],
      securityCode: ['', Validators.required],
      paymentMethod: ['']
    });
  }

  selectPaymentMethod($event: any) {
    this.paymentMethodSelected = $event.value
  }
  onPayment(){
    this.onPaymentComplete.emit();
  }

}

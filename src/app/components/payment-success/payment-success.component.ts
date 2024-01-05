import { Component, Input } from '@angular/core';
import { FlightList } from '../../shared/interfaces/flight-list.interface';
import labels from '../../../assets/json/labels.json';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'klm-payment-success',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule
  ],
  templateUrl: './payment-success.component.html',
  styleUrl: './payment-success.component.scss'
})
export class PaymentSuccessComponent {

  labelData:any;

  @Input() returnFlight?:FlightList;
  @Input() outboundFlight?:FlightList;

  constructor(){
    this.labelData = labels.flighListComponent;
  }

}

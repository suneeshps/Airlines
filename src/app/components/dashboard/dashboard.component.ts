import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FlightsService } from '../../shared/services/flights.service';
import { FlightList } from '../../shared/interfaces/flight-list.interface';
import  labels from '../../../assets/json/labels.json';

@Component({
  selector: 'klm-dashboard',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  labelData: any;
  userId: string;
  outboundFlight?: FlightList;
  returnFlight?: FlightList;

  constructor(private flightService: FlightsService){
    this.labelData = labels.dashboardComponent;
    this.userId = 'asdgecxr131434'
  }
  ngOnInit() {
    this.flightService.getUserOutboundFlighList(this.userId).subscribe((data) => {
      this.outboundFlight = data;
    });
    this.flightService.getUserReturnFlighList(this.userId).subscribe((data) => {
      this.returnFlight = data;
    });
  }
}

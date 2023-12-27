import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightsService } from '../../../shared/services/flights.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FlightList } from '../../../shared/interfaces/flight-list';

@Component({
  selector: 'klm-flight-list',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule
  ],
  templateUrl: './flight-list.component.html',
  styleUrl: './flight-list.component.scss'
})
export class FlightListComponent implements OnInit {
  flightList: FlightList[] = [];
  labelDuration: string;

  constructor(private route: ActivatedRoute, private flightService: FlightsService) {
    this.labelDuration = 'Duration';
  }

  ngOnInit() {
    const searchParams = this.route.snapshot.paramMap.get('searchParams');
    this.flightService.getFlightList(searchParams).subscribe((data) => {
      this.flightList = data;
    });
  }

}

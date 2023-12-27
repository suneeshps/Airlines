import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightsService } from '../../../shared/services/flights.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

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
export class FlightListComponent implements OnInit{
  searchParams: any;
  flightList: any;

  constructor(private route: ActivatedRoute, private flightService: FlightsService) {}
  ngOnInit(): void {
    this.searchParams = this.route.snapshot.paramMap.get('searchParams');
    debugger
    console.log("sasdasd",this.searchParams);
    
    this.flightService.getFlightList(this.searchParams).subscribe((data) => {
      //console.log(data);
      this.flightList = data;
    });
  }
}

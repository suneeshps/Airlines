import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { TripCategories } from '../../shared/interfaces/trip-categories.interface';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { EconomyCategories } from '../../shared/interfaces/economy-categories.interface';
import { FlightsService } from '../../shared/services/flights.service';
import { Airports, AirportCode } from '../../shared/interfaces/airports-interface';
import { HomePictureSource } from './home-picture-source.interface';
import { HomeFlightDeals } from './home-flight-deals.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalService } from '../../shared/services/global.service';

@Component({
  selector: 'klm-home',
  standalone: true,
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    CommonModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  bookFlightText: string;
  searchForm: FormGroup;
  tripCategories: TripCategories[];
  economyCategories: EconomyCategories[];
  airports: Airports[];
 // flightDeals: HomeFlightDeals[] = [];
  minDate: Date;
  maxDate: Date;
  labelDeals : string;
  labelDealsMessage: string;
  labelSelectMessage: string;
  flightDeals$! : Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private flightService: FlightsService,
    private router: Router,
    private route: ActivatedRoute,
    private globalService: GlobalService) {
    this.labelDeals = 'Destinations and deals' 
    this.labelDealsMessage = 'Discover our best Economy class deals on flights departing from';
    this.labelSelectMessage = 'Select your travel date';
    this.bookFlightText = 'Book a flight';
    this.tripCategories = [
      {
        label: 'Round trip',
        value: 1
      },
      {
        label: 'One way',
        value: 0
      }
    ];
    this.economyCategories = [
      {
        label: 'Economy Class',
        value: 1
      },
      {
        label: 'Business Class',
        value: 0
      }
    ];
    this.airports = [
      {
        label: 'Delhi, Indira Gandhi international Airport (DEL)',
        code: AirportCode.DEL
      },
      {
        label: 'Bangaluru, Bangaluru international Airport (BLR)',
        code: AirportCode.DEL
      },
      {
        label: 'Chennai Madras, Chennai international Airport (MAA)',
        code: AirportCode.MAA
      }
    ];
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDay();

    this.minDate = new Date(currentYear, currentMonth, currentDay);
    this.maxDate = new Date(currentYear + 1, 11, 31);
    var d = new Date();

    this.searchForm = this.formBuilder.group({
      tripCategory: [1],
      departure: ['Delhi, Indira Gandhi International', [Validators.required]],
      arrival: ['Amsterdam, Amsterdam Schiphol Airport', [Validators.required]],
      passengers: [1],
      economyCategory: [1],
      departureDate: [new Date()],
      returnDate: [new Date(d.setDate(d.getDate() + 5))],
      travelDate: [new Date()]
    });
  }

  ngOnInit() {
    this.getFlightDeals();
  }

  onSelectChange(event: any): void {
  }

  searchFlights(): void {
    this.globalService.setData(this.searchForm.value);
    this.router.navigate(['/flight-list']);
  }

  private getFlightDeals() {
    this.flightDeals$ = this.flightService.getFlightDeals();

  }

  getPictureSource(): HomePictureSource[] {
    return [
      {
        src: "https://img.static-kl.com/transform/abe24868-a29c-4a76-856e-2d74cc20ab2b/?io=transform:fill,width:360,height:240",
        media: "(max-width: 360px)"
      },
      {
        src: "https://img.static-kl.com/transform/abe24868-a29c-4a76-856e-2d74cc20ab2b/?io=transform:fill,width:600,height:400",
        media: "(min-width: 361px) and (max-width: 600px)"
      },
      {
        src: "https://img.static-kl.com/transform/abe24868-a29c-4a76-856e-2d74cc20ab2b/?io=transform:fill,width:768,height:512",
        media: "(min-width: 601px) and (max-width: 768px)"
      },
      {
        src: "https://img.static-kl.com/transform/abe24868-a29c-4a76-856e-2d74cc20ab2b/?io=transform:fill,width:960,height:320",
        media: "(min-width: 769px) and (max-width: 960px)"
      },
      {
        src: "https://img.static-kl.com/transform/abe24868-a29c-4a76-856e-2d74cc20ab2b/?io=transform:fill,width:1280,height:427",
        media: "(min-width: 961px) and (max-width: 1280px)"
      },
      {
        src: "https://img.static-kl.com/transform/abe24868-a29c-4a76-856e-2d74cc20ab2b/?io=transform:fill,width:1440,height:480",
        media: "(min-width: 1281px)"
      },
      {
        src: "https://img.static-kl.com/transform/abe24868-a29c-4a76-856e-2d74cc20ab2b/?io=transform:fill,width:1440,height:480",
        media: "(min-width: 1281px)"
      }
    ]
  }

}

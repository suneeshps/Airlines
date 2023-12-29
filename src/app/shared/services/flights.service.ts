import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightList } from '../interfaces/flight-list.interface';
import { FlightDeals } from '../interfaces/flight-deals.interface';
import * as data from '../../../assets/json/data.json'


@Injectable({
  providedIn: 'root'
})

export class FlightsService {

  flightList: FlightList[];
  returnFlightList: FlightList[];
  flightDeals: FlightDeals[];

  constructor() {
    this.flightList = data.flightService.flightList;
    this.returnFlightList = data.flightService.returnFlightList;
    this.flightDeals = data.flightService.flightDeals;
  }

  getFlightList(searchParams : string | null) : Observable<any> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.flightList);
      }, 1000);
    });
  }
  getReturnFlightList(searchParams : string | null) : Observable<any> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.returnFlightList);
      }, 1000);
    });
  }

  getFlightDeals(): Observable<any> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.flightDeals);
      }, 1000);
    });
  }

}

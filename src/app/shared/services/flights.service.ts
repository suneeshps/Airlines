import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightList } from '../interfaces/flight-list.interface';
import { FlightDeals } from '../interfaces/flight-deals.interface';
import labels from '../../../assets/json/data.json'


@Injectable({
  providedIn: 'root'
})

export class FlightsService {

  flightList: FlightList[];
  returnFlightList: FlightList[];
  flightDeals: FlightDeals[];

  constructor() {
    this.flightList = labels.flightService.flightList;
    this.returnFlightList = labels.flightService.returnFlightList;
    this.flightDeals = labels.flightService.flightDeals;
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
  getUserOutboundFlighList(userId : string | null) : Observable<any> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.flightList[0]);
      }, 1000);
    });
  }
  getUserReturnFlighList(userId : string | null) : Observable<any> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.returnFlightList[0]);
      }, 1000);
    });
  }

}

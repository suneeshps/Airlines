import { TestBed } from '@angular/core/testing';

import { FlightsService } from './flights.service';

const flightList = [
  {
    "departureTime": "2023-12-30T03:20:00",
    "arrivalTime": "2023-12-30T08:25:00",
    "destinationCode": "AMS",
    "originCode": "DEL",
    "operatingFlight": "KL",
    "originPlace": "Delhi",
    "destinationPlace": "Amsterdam",
    "operatingFlightLogo": "https://img.static-kl.com/transform/d0753316-d164-417e-8536-19e4f8879132/?io=transform:fill,height:32",
    "operatingCarrier": "KLM",
    "flightNumber": "KL0872",
    "duration": "9h35",
    "cabinClass": "ECONOMY",
    "currency": "INR",
    "seatsLeft": 3,
    "displayPrice": 138507,
    "isDirect": true
  },
  {
    "departureTime": "2023-12-30T01:45:00",
    "arrivalTime": "2023-12-30T10:30:00",
    "destinationCode": "AMS",
    "originCode": "DEL",
    "operatingFlight": "AF",
    "originPlace": "Delhi",
    "destinationPlace": "Amsterdam",
    "operatingFlightLogo": "https://img.static-kl.com/transform/a6902568-444d-41e5-8639-851571eeebca/?io=transform:fill,height:32",
    "operatingCarrier": "Air France",
    "flightNumber": "AF0225",
    "duration": "13h15",
    "cabinClass": "ECONOMY",
    "currency": "INR",
    "seatsLeft": 1,
    "displayPrice": 51222,
    "isDirect": false
  },
  {
    "departureTime": "2023-12-30T01:45:00",
    "arrivalTime": "2023-12-30T10:55:00",
    "destinationCode": "AMS",
    "originCode": "DEL",
    "operatingFlight": "AF",
    "originPlace": "Delhi",
    "destinationPlace": "Amsterdam",
    "operatingFlightLogo": "https://img.static-kl.com/transform/a6902568-444d-41e5-8639-851571eeebca/?io=transform:fill,height:32",
    "operatingCarrier": "Air France",
    "flightNumber": "KL2369",
    "duration": "13h15",
    "cabinClass": "ECONOMY",
    "currency": "INR",
    "seatsLeft": 2,
    "displayPrice": 54592,
    "isDirect": false
  },
  {
    "departureTime": "2023-12-30T01:45:00",
    "arrivalTime": "2023-12-30T11:45:00",
    "destinationCode": "AMS",
    "originCode": "DEL",
    "operatingFlight": "AF",
    "originPlace": "Delhi",
    "destinationPlace": "Amsterdam",
    "operatingFlightLogo": "https://img.static-kl.com/transform/a6902568-444d-41e5-8639-851571eeebca/?io=transform:fill,height:32",
    "operatingCarrier": "Air France",
    "flightNumber": "KL2369",
    "duration": "14h30",
    "cabinClass": "ECONOMY",
    "currency": "INR",
    "seatsLeft": 1,
    "displayPrice": 54592,
    "isDirect": false
  }
];
const returnFlightList = [
  {
    "departureTime": "2023-12-30T03:20:00",
    "arrivalTime": "2023-12-30T08:25:00",
    "destinationCode": "DEL",
    "originCode": "AMS",
    "operatingFlight": "KL",
    "originPlace": "Amsterdam",
    "destinationPlace": "Delhi",
    "operatingFlightLogo": "https://img.static-kl.com/transform/d0753316-d164-417e-8536-19e4f8879132/?io=transform:fill,height:32",
    "operatingCarrier": "KLM",
    "flightNumber": "KL0872",
    "duration": "9h35",
    "cabinClass": "ECONOMY",
    "currency": "INR",
    "seatsLeft": 3,
    "displayPrice": 128507,
    "isDirect": true
  },
  {
    "departureTime": "2023-12-30T01:45:00",
    "arrivalTime": "2023-12-30T10:30:00",
    "destinationCode": "DEL",
    "originCode": "AMS",
    "operatingFlight": "KL",
    "originPlace": "Amsterdam",
    "destinationPlace": "Delhi",
    "operatingFlightLogo": "https://img.static-kl.com/transform/a6902568-444d-41e5-8639-851571eeebca/?io=transform:fill,height:32",
    "operatingCarrier": "Air France",
    "flightNumber": "AF0225",
    "duration": "13h15",
    "cabinClass": "ECONOMY",
    "currency": "INR",
    "seatsLeft": 1,
    "displayPrice": 41222,
    "isDirect": false
  },
  {
    "departureTime": "2023-12-30T01:45:00",
    "arrivalTime": "2023-12-30T10:55:00",
    "destinationCode": "DEL",
    "originCode": "AMS",
    "operatingFlight": "KL",
    "originPlace": "Amsterdam",
    "destinationPlace": "Delhi",
    "operatingFlightLogo": "https://img.static-kl.com/transform/a6902568-444d-41e5-8639-851571eeebca/?io=transform:fill,height:32",
    "operatingCarrier": "Air France",
    "flightNumber": "KL2369",
    "duration": "13h40",
    "cabinClass": "ECONOMY",
    "currency": "INR",
    "seatsLeft": 2,
    "displayPrice": 44592,
    "isDirect": false
  },
  {
    "departureTime": "2023-12-30T01:45:00",
    "arrivalTime": "2023-12-30T11:45:00",
    "destinationCode": "DEL",
    "originCode": "AMS",
    "operatingFlight": "KL",
    "originPlace": "Amsterdam",
    "destinationPlace": "Delhi",
    "operatingFlightLogo": "https://img.static-kl.com/transform/a6902568-444d-41e5-8639-851571eeebca/?io=transform:fill,height:32",
    "operatingCarrier": "Air France",
    "flightNumber": "KL2369",
    "duration": "14h30",
    "cabinClass": "ECONOMY",
    "currency": "INR",
    "seatsLeft": 1,
    "displayPrice": 44592,
    "isDirect": false
  }
];
const flightDeals = [
  {
    "destination": "Zurich",
    "country": "Switzerland",
    "startingPrice": 59277,
    "currency": "INR",
    "tripCategory": "Round trip",
    "logoUrl": "https://img.static-kl.com/images/media/506F5E1C-28C1-4555-A238CB9D4AD6039E?w=48&aspect_ratio=1:1"
  },
  {
    "destination": "New York",
    "country": "United States",
    "startingPrice": 84860,
    "currency": "INR",
    "tripCategory": "Round trip",
    "logoUrl": "https://img.static-kl.com/images/media/ED0BC486-D564-45CE-A95410C7663B525F?w=48&aspect_ratio=1:1"
  },
  {
    "destination": "Santiago de Chile",
    "country": "Chile",
    "startingPrice": 148198,
    "currency": "INR",
    "tripCategory": "Round trip",
    "logoUrl": "https://img.static-kl.com/images/media/B9D57625-293F-441D-817B53BBE527C8F7?w=48&aspect_ratio=1:1"
  },
  {
    "destination": "Sao Paulo",
    "country": "Brazil",
    "startingPrice": 129304,
    "currency": "INR",
    "tripCategory": "Round trip",
    "logoUrl": "https://img.static-kl.com/images/media/ED0BC486-D564-45CE-A95410C7663B525F?w=48&aspect_ratio=1:1"
  }
];
const searchParams = '"tripCategory":1,"departure":"Delhi,%20Indira%20Gandhi%20International",\
"arrival":"Amsterdam,%20Amsterdam%20Schiphol%20Airport","passengers":1,"economyCategory":1,\
"departureDate":"2024-01-03T09:40:17.620Z","returnDate":"2024-01-08T09:40:17.620Z",\
"travelDate":"2024-01-03T09:40:17.620Z"';

describe('FlightsService', () => {
  let service: FlightsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should #getFlightList return value from observable', (done: DoneFn) => {
    service.getFlightList(searchParams).subscribe((value) => {
      expect(value).toEqual(flightList);
      done();
    });
  });

  it('should #getReturnFlightList return data', (done: DoneFn) => {
    service.getReturnFlightList(searchParams).subscribe((res) => {
      expect(res).toEqual(returnFlightList);
      done();
    });
  });

  it('should #getFlightDeals return data', (done: DoneFn) => {
    service.getFlightDeals().subscribe((res) => {
      expect(res).toEqual(flightDeals);
      done();
    });
  });

});

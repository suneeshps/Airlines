import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSelectionComponent } from './flight-selection.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

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

describe('FlightSelectionComponent', () => {
  let component: FlightSelectionComponent;
  let fixture: ComponentFixture<FlightSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FlightSelectionComponent,
        RouterTestingModule
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlightSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain flight list', () => {
    component.flightList = flightList;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.klm-flight-list__item__content'))).toBeTruthy();
  });
});

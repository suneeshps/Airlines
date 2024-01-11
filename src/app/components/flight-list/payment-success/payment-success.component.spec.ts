import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSuccessComponent } from './payment-success.component';
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

describe('PaymentSuccessComponent', () => {
  let component: PaymentSuccessComponent;
  let fixture: ComponentFixture<PaymentSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentSuccessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain booked flight details', () => {
    component.outboundFlight = flightList[0];
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.klm-payment-success__item__content'))).toBeTruthy();
  });
});

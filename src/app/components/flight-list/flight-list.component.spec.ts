import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightListComponent } from './flight-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { MatStepper } from '@angular/material/stepper';

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
const passengerDetails = { 
  "genderCategory": 0, 
  "firstName": "test", 
  "lastName": "test", 
  "email": "test@test.com", 
  "telephoneNumber": 134314314,
  "countryCode": 0 
  }

describe('FlightListComponent', () => {
  let component: FlightListComponent;
  let fixture: ComponentFixture<FlightListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FlightListComponent,
        RouterTestingModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FlightListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should outbound flight selection go to return flight component', () => {
    const stepperComponent: MatStepper = fixture.debugElement.query(
      By.css('mat-stepper'),
    )!.componentInstance;

    expect(stepperComponent.selectedIndex).toBe(0);
    component.getReturnFlightList(flightList[0]);
    component.tripCategory = 1;
    fixture.detectChanges();
    expect(stepperComponent.selectedIndex).toBe(1)
  });

  it('should return flight selection  go to passenger selection component', () => {
    const stepperComponent: MatStepper = fixture.debugElement.query(
      By.css('mat-stepper'),
    )!.componentInstance;
    component.getReturnFlightList(flightList[0]);
    component.tripCategory = 1;
    expect(stepperComponent.selectedIndex).toBe(1);
    component.goToPassengerDetails(flightList[0]);
    fixture.detectChanges();
    expect(stepperComponent.selectedIndex).toBe(2)
  });

  it('should passenger selection component go to payment form', () => {
    const stepperComponent: MatStepper = fixture.debugElement.query(
      By.css('mat-stepper'),
    )!.componentInstance;
    component.getReturnFlightList(flightList[0]);
    component.tripCategory = 1;
    expect(stepperComponent.selectedIndex).toBe(1);
    component.goToPassengerDetails(returnFlightList[0]);
    component.goToPaymentMethod(passengerDetails);
    fixture.detectChanges();
    expect(stepperComponent.selectedIndex).toBe(3)
  });
  it('should payment selection go to success component', () => {
    const stepperComponent: MatStepper = fixture.debugElement.query(
      By.css('mat-stepper'),
    )!.componentInstance;
    component.getReturnFlightList(flightList[0]);
    component.tripCategory = 1;
    expect(stepperComponent.selectedIndex).toBe(1);
    component.goToPassengerDetails(returnFlightList[0]);
    component.goToPaymentMethod(passengerDetails);
    component.proceedPayment('');
    fixture.detectChanges();
    expect(stepperComponent.selectedIndex).toBe(3);// to fix later
  });

});

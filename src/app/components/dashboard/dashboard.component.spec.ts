import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  const sampleFlight = {
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
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain a title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')).toBeTruthy();
  });
  it('should contain a sub title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')).toBeTruthy();
  });
});

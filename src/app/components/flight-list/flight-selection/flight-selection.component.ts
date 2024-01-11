import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FlightList } from '../../../shared/interfaces/flight-list.interface';
import  labels from '../../../../assets/json/labels.json';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'klm-flight-selection',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatFormFieldModule
  ],
  templateUrl: './flight-selection.component.html',
  styleUrl: './flight-selection.component.scss'
})
export class FlightSelectionComponent {
  @Input() flightList? : FlightList[] | null; 
  @Output() onFlightSelection = new EventEmitter<FlightList>();
  labelData = labels.flighListComponent;
  constructor(){
  }
  onSelect(value: FlightList){
    this.onFlightSelection.emit(value);
  }
}

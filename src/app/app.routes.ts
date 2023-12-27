import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { FlightListComponent } from './components/flights/flight-list/flight-list.component';

export const routes: Routes = [
    {
        path:'', component: HomeComponent
    },
    {
        path:'home', component: HomeComponent
    },
    {
        path:'dashboard', component: DashboardComponent
    },
    {
        path:'flight-list', component: FlightListComponent
    },

];

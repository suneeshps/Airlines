import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { FlightListComponent } from './components/flights/flight-list/flight-list.component';
import { LoginComponent } from './components/login/login.component';

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
        path:'flight-list/:searchParams', component: FlightListComponent
    },
    {
        path:'login', component: LoginComponent
    },

];

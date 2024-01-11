import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { FlightListComponent } from './components/flight-list/flight-list.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path:'', component: HomeComponent
    },
    {
        path:'home', component: HomeComponent
    },
    {
        path:'dashboard', component: DashboardComponent, canActivate: [authGuard]
    },
    {
        path:'flight-list', component: FlightListComponent
    },
    {
        path:'login', component: LoginComponent
    },
    {
        path:'sign-up', component: SignUpComponent
    }

];

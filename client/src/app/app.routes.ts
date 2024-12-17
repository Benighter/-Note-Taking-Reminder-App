import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';

export const routes: Routes = [
  {path: 'navbar', component: NavbarComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // { path: '', redirectTo: '/login', pathMatch: 'full' }
];

import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NotificationComponent } from './components/notification/notification.component';

export const routes: Routes = [
  {path: 'navbar', component: NavbarComponent},
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'note-list', component: NoteListComponent},
  {path: 'notification', component: NotificationComponent},

  // { path: '', redirectTo: '/login', pathMatch: 'full' }
];

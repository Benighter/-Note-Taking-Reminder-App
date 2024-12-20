import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { ReminderListComponent } from './components/reminder-list/reminder-list.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(CommonModule)
  ]
});

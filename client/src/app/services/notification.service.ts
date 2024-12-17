import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private messageSource = new Subject<string>();
  message$ = this.messageSource.asObservable();

  constructor() { }

  showSuccess(message: string) {
    this.messageSource.next(message);
  }
}

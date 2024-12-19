import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReminderService } from '../../services/reminder.service';

@Component({
  selector: 'app-reminder-list',
  templateUrl: './reminder-list.component.html',
  styleUrls: ['./reminder-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ReminderListComponent implements OnInit {
  notes: any[] = [];

  constructor(private reminderService: ReminderService) {}

  ngOnInit(): void {
    this.reminderService.getNotesWithReminders().subscribe((data: any) => {
      this.notes = data.sort((a: any, b: any) => {
        if (a.priority !== b.priority) {
          return b.priority - a.priority;
        }
        return new Date(a.reminderDate).getTime() - new Date(b.reminderDate).getTime();
      });
    });
  }
}

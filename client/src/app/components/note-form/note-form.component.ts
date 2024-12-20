import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../../services/note.service';
import { Note } from '../../models/note.model';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-note-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {
  noteForm: FormGroup;
  isEditMode = false;
  noteId?: string;
  showReminder = false;
  categories = ['Personal', 'Work', 'Shopping', 'Others'];
  isFullScreen = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private noteService: NoteService,
    private notificationService: NotificationService
  ) {
    this.noteForm = this.fb.group({
      title: ['', Validators.required],
      content: [''],
      category: [''],
      reminder: [null]
    });
  }

  ngOnInit() {
    this.noteId = this.route.snapshot.paramMap.get('id') || undefined;

    if (this.noteId) {
      this.isEditMode = true;
      const note = this.noteService.getNoteById(this.noteId);
      if (note) {
        this.noteForm.patchValue(note);
        if (note.reminder) {
          this.showReminder = true;
        }
      }
    }
  }

  toggleReminder(event: any) {
    this.showReminder = event.target.checked;
    if (!this.showReminder) {
      this.noteForm.patchValue({ reminder: null });
    }
  }

  onSubmit() {
    if (this.noteForm.valid) {
      const note: Note = {
        ...this.noteForm.value,
        id: this.noteId,
        updatedAt: new Date(),
        createdAt: this.isEditMode ? this.noteForm.value.createdAt : new Date()
      };

      if (this.isEditMode) {
        this.noteService.updateNote(note);
        this.notificationService.showSuccess('Note updated successfully!');
      } else {
        this.noteService.addNote(note);
        this.notificationService.showSuccess('Note added successfully!');
      }
      this.router.navigate(['']);
    }
  }

  deleteNote() {
    if (this.noteId && confirm('Are you sure you want to delete this note?')) {
      this.noteService.deleteNote(this.noteId);
      this.notificationService.showSuccess('Note deleted successfully!');
      this.router.navigate(['']);
    }
  }

  cancel() {
    this.router.navigate(['']);
  }

  toggleFullScreen() {
    this.isFullScreen = !this.isFullScreen;
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from '../../services/note.service';
import { Note } from '../../models/note.model';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.css'
})
export class NoteListComponent implements OnInit {
  notes: Note[] = [];

  constructor(
    private router: Router,
    private noteService: NoteService
  ) {}

  ngOnInit() {
    this.noteService.getNotes().subscribe(notes => {
      this.notes = notes;
    });
  }

  openNote(id?: string) {
    if (id) {
      this.router.navigate(['/notes', id]);
    } else {
      this.router.navigate(['/notes/new']);
    }
  }
}

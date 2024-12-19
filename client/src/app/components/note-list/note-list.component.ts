import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from '../../services/note.service';
import { Note } from '../../models/note.model';
import { DatePipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  notes: Note[] = [];

  constructor(
    private router: Router,
    private noteService: NoteService
  ) { }

  ngOnInit(): void {
    this.noteService.getNotes().subscribe(notes => {
      this.notes = notes;
    });
  }

  openNote(id?: string): void {
    if (id) {
      this.router.navigate(['/notes', id]);
    } else {
      this.router.navigate(['/notes/new']);
    }
  }

  onDragStart(event: any): void {
    console.log(event);
  }

  onDragOver(event: any): void {
    console.log(event);
  }

  onDrop(event: any): void {
    console.log(event);
  }
}

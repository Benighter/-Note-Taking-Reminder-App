import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notes: Note[] = [];
  private notesSubject = new BehaviorSubject<Note[]>([]);

  constructor() {
    this.loadNotes();
  }

  getNotes(): Observable<Note[]> {
    return this.notesSubject.asObservable();
  }

  getNoteById(id: string): Note | undefined {
    return this.notes.find(note => note.id === id);
  }

  addNote(note: Note): void {
    const newNote = { ...note, id: Date.now().toString() };
    this.notes.push(newNote);
    this.saveNotes();
    this.notesSubject.next(this.notes);
  }

  updateNote(updatedNote: Note): void {
    this.notes = this.notes.map(note =>
      note.id === updatedNote.id ? updatedNote : note
    );
    this.saveNotes();
    this.notesSubject.next(this.notes);
  }

  deleteNote(id: string): void {
    this.notes = this.notes.filter(note => note.id !== id);
    this.saveNotes();
    this.notesSubject.next(this.notes);
  }

  private loadNotes(): void {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      this.notes = JSON.parse(storedNotes);
      this.notesSubject.next(this.notes);
    }
  }

  private saveNotes(): void {
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }
}

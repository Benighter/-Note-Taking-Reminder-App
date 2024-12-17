import { Component } from '@angular/core';

@Component({
  selector: 'app-note-list',
  imports: [],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.css'
})
export class NoteListComponent {
  openNote() {
    // Add your logic here to open the note
    console.log('Note clicked');
  }
}

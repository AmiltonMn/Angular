import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-item',
  imports: [ MatCardModule, MatListModule ],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.css'
})
export class BookItemComponent {
  book: Book | undefined;


}

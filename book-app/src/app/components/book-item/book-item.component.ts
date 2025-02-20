import { Component, Input, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { Book } from '../../models/book';
import { StarsComponent } from "../stars/stars.component";

@Component({
  selector: 'book-item',
  imports: [MatCardModule, MatListModule, StarsComponent],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.css'
})
export class BookItemComponent {

  @Input()
  book: Book | undefined
}

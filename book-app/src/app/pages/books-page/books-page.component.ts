import { Component, OnInit } from '@angular/core';
import { BookItemComponent } from '../../components/book-item/book-item.component';
import { Book } from '../../models/book';
import { BooksService } from '../../services/books.service';
import { Observable } from 'rxjs';

interface BookData {
  books: Book[],
  total: number
}

@Component({
  selector: 'app-books-page',
  imports: [ BookItemComponent,  ],
  templateUrl: './books-page.component.html',
  styleUrl: './books-page.component.css'
})
export class BooksPageComponent implements OnInit {
  books: Observable<BookData> | undefined

  constructor(
    private service: BooksService
  ) { }

  ngOnInit(): void {
    console.log(this.books)
    let data = this.service.get()
  }
}

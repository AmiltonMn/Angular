import { Component, Input, input, OnInit } from '@angular/core';
import { BookItemComponent } from '../../components/book-item/book-item.component';
import { Book } from '../../models/book';
import { BookData, BooksService } from '../../services/books.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-books-page',
  imports: [ BookItemComponent, CommonModule, MatPaginatorModule ],
  templateUrl: './books-page.component.html',
  styleUrl: './books-page.component.css'
})
export class BooksPageComponent implements OnInit {

  @Input()
  maxItems: number = 6
  query: string = ""
  page: number = 0
  pageEvent: PageEvent | undefined

  books: Observable<BookData> | undefined
  selectedBooks: Book[] = []

  constructor(
    private service: BooksService
  ) { }

  ngOnInit(): void {
    console.log(this.books)
    console.log()
    this.books = this.service.search(this.query, this.page, this.maxItems)
  }

  changePage(e: PageEvent) {
    this.books = this.service.search(this.query, e.pageIndex, e.pageSize)
  }
}

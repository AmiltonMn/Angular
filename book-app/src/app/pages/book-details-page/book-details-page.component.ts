import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../models/book';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../services/books.service';
import { MatCardModule } from '@angular/material/card'
import { MatListModule } from '@angular/material/list'
import { MatChipsModule } from '@angular/material/chips'
import { CommonModule } from '@angular/common';
import { StarsComponent } from "../../components/stars/stars.component";

@Component({
  selector: 'app-book-details-page',
  imports: [CommonModule, MatCardModule, MatListModule, MatChipsModule, StarsComponent ],
  templateUrl: './book-details-page.component.html',
  styleUrl: './book-details-page.component.css'
})
export class BookDetailsPageComponent implements OnInit {
  book: Observable<Book> | undefined;

  constructor(
    private route: ActivatedRoute, 
    private service: BooksService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = parseInt(params['id']);

      if (isNaN(id))
        return;

      this.book = this.service.getDetails(id);
    })
  }
}

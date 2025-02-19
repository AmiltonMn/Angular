import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

export interface BookData {
  books: Book[],
  total: number
}

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private apiUrl = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  get() : Observable<BookData> {
    return this.http.get<BookData>(this.apiUrl + '/book');
  }

  search(query: string, page: number, limit: number) : Observable<BookData> {
    let url = `${this.apiUrl}/book?query=${query}&page=${page}&limit=${limit}`;
    return this.http.get<BookData>(url);
  }

  getDetails(id: number) : Observable<Book> {
    let url = `${this.apiUrl}/book/${id}`;
    return this.http.get<Book>(url);
  }
}

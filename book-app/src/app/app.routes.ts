import { Routes } from '@angular/router';
import { BooksPageComponent } from './pages/books-page/books-page.component';
import { BookDetailsPageComponent } from './pages/book-details-page/book-details-page.component';

export const routes: Routes = [
    {
        path: '', 
        component: BooksPageComponent
    },
    {
        path: 'book/:id', 
        component: BookDetailsPageComponent
    }
];

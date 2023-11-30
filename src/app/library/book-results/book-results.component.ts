import { Component } from '@angular/core';
import {book as Book} from 'C:/Users/Christian/Documents/angular C.C.M/angular-bootIt/BookIt/Bookit/src/app/shared/book/book.model'

@Component({
  selector: 'app-book-results',
  templateUrl: './book-results.component.html',
  styleUrls: ['./book-results.component.css']
})
export class BookResultsComponent {
  Book = []
allBooks: Book[] =[
  new Book(
    'Book of Testing',
    'Will Wilder',
    'Mystery',
    'https://source.unsplash.com/50x50/?mystery,book'
  ),
  new Book(
    'Harry Potter',
    'J.K. Rowling',
    'Fiction',
    'https://source.unsplash.com/50x50/?mystery,book'
  )
]
}

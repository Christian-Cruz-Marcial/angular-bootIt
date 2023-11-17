import { Component } from '@angular/core';
import {book} from 'C:/Users/ccruz/OneDrive/Documents/angular C.C.M/angular-debug-ex/BookIt/src/app/shared/book/book.model'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  myBooks: book[] =[
    new book(
      'Book of Testing',
      'Will Wilder',
      'Mystery',
      'https://source.unsplash.com/50x50/?mystery,book'
    )
  ];
  
}

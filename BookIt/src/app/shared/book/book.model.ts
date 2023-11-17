import { Component,  } from '@angular/core';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class book{
    constructor (public title: String, public author: String, public genre: String, public coverImagePath: String){}
}
import { Component, OnInit, Input } from '@angular/core';
import { fields } from '../book-list/book-list.component';
import { BookService } from '../book.service';
import { BookListComponent } from '../book-list/book-list.component';


@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css'],
  providers: [BookListComponent]
})
export class ViewBookComponent implements OnInit {

  @Input() bookdata: fields;

  constructor(
    public book: BookService,
    public booklist:BookListComponent
    ) { }

  ngOnInit() {
  }


  open(){
  }
}

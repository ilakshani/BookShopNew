import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { BookData } from '../book-data';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { Book } from '../book'
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {


  constructor(public book: BookService) { }

  public searchKey: string = '';
  public bookdetail: any;


  public bookname: string;
  public authorname: string;
  public publishyear: string;
  public quantity: number;
  public bookprice: number;
  public description: string;

  //form controls
  bookNameFormControl = new FormControl('', []);
  authorNameFormControl = new FormControl('', []);
  publishedYearFormControl = new FormControl('', []);
  quantityFormControl = new FormControl('', []);
  priceFormControl = new FormControl('', []);
  descriptionFormControl = new FormControl('', []);

  ngOnInit() {
    this.book.bookdata = [];
    this.getData();
  }
  getData() {
    this.book.bookdata = [];
    this.book.viewData().subscribe((data) => {
      data.forEach(element => {
        console.log(element);
        this.book.bookdata.push(new fields(element));
      });
      console.log("show");
    });
  }

  addbook() {
    this.book.isBookLoad = true;

  }

  deleteaBook(id: number) {
    this.book.isLoading=true;
    console.log(id);
    this.book.deleteaBook(id).subscribe((result) => {
      console.log(result);
      this.getData();
      this.book.isLoading=false;
    })
  }

  searchBarCloseBtn() {
    this.searchKey = '';
  }
  openBookDetails(index: number) {
    this.book.viewbook = true;
    this.book.editbook = false;
    this.book.bookindex = index;
    this.selected_book = this.book.bookdata[index];
        console.log(this.selected_book);

  }
  editBookDetails() {
    console.log(this.book.bookindex);
    this.book.viewbook = false;
    this.book.editbook = true;
  }

  selected_book: fields;
  saveChanges() {
    this.book.isLoading=true;
    console.log("changed...");
    console.log();
    this.book.updateBook(this.book.bookdata[this.book.bookindex].id, {
      B_Name:this.selected_book.bookname,
      A_Name:this.selected_book.authorname,
      description:this.selected_book.description,
      P_Year: this.selected_book.publishedyear,
      B_price: this.selected_book.bookprice,
      A_Status:this.selected_book.availablestatus,
      D_Status: this.selected_book.deletestatus
    }).subscribe((data) => {
      console.log(data);
      this.book.isLoading=false;
      this.getData();
      this.book.editbook=false;

    })
    console.log(this.authorname);
  }

}

export class fields {
  public bookname: string;
  public authorname: string;
  public description: string;
  public publishedyear: string;
  public bookprice: number;
  public availablestatus: boolean;
  public deletestatus: boolean;
  public quantity: number;
  public id: number;

  constructor(data: any) {
    this.bookname = data['B_Name'];
    this.authorname = data['A_Name'];
    this.description = data['description'];
    this.publishedyear = data['P_Year'];
    this.bookprice = data['B_price'];
    this.availablestatus = data['A_Status'];
    this.deletestatus = data['D_Status'];
    this.quantity = data['quantity'];
    this.id = data['id'];
  }

}

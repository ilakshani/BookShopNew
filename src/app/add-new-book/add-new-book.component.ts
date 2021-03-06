import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { FormControl,Validators,NgForm } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BookListComponent } from '../book-list/book-list.component';

@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.css'],
  providers: [BookListComponent]
})
export class AddNewBookComponent implements OnInit {

  constructor(
    public book : BookService,
    public booklist : BookListComponent
    ) { }

  public bookname: string;
  public authorname: string;
  public publishedyear: string;
  public quantity: number;
  public price: number;
  public deletestatus: boolean;
  public description: string;

  bookNameFormControl = new FormControl('',[
    Validators.required

  ]);
  authorNameFormControl = new FormControl('',[
    Validators.required
  ]);
  publishedYearFormControl = new FormControl('',[
    Validators.required,
    Validators.pattern("^((\\+91-?)|0)?[0-9]{4}$")
  ]);
  quantityFormControl = new FormControl('',[
    Validators.required,
    Validators.pattern('^[1-9][0-9]*$')
  ]);
  priceFormControl = new FormControl('',[
    Validators.required,
    Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')
  ]);
  descriptionFormControl = new FormControl('',[
    Validators.required
  ]);

  ngOnInit() {
  }

  insertBook(){
    
    this.book.isLoading = true;
    console.log("submitted..");
    this.deletestatus = false;
    console.log(this.bookNameFormControl.value);
    console.log(this.authorNameFormControl.value);
    console.log(this.publishedYearFormControl.value);
    console.log(this.quantityFormControl.value);
    console.log(this.priceFormControl.value);
    console.log(this.descriptionFormControl.value);
    this.book.addNewBook(this.bookNameFormControl.value,this.authorNameFormControl.value,this.descriptionFormControl.value,this.publishedYearFormControl.value,this.priceFormControl.value,this.quantityFormControl.value,this.deletestatus).subscribe((data)=>{
    console.log(data);
    console.log("success");
    this.book.isLoading = false;
    this.booklist.getData();
    this.book.isBookLoad=false;
    });
  }
}

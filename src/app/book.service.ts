import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { fields } from './book-list/book-list.component';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(public http: HttpClient) { }

  public serverUrl = 'https://afternoon-ridge-09902.herokuapp.com/';
  public insertbookUrl = this.serverUrl+ 'api/insertnewbook';
  public viewBookUrl = this.serverUrl+'api/getalldetails';
  public deletebookUrl = this.serverUrl+'api/deletebook';
  public editBookDetails = this.serverUrl+'api/editbookdetails/';
  public bookdata: fields[] = [];
  public isBookLoad: boolean = false;
  public viewbook: boolean = false;
  public editbook: boolean = false;
  public bookindex:number;
  public isLoading:boolean = false;


  addNewBook(bookName: string, AuthorName: string,description: string, publishedYear: string, bookPrice: number, quantity: number, deleteStatus: boolean) {
    return this.http.post<any>(this.insertbookUrl, {
      'B_Name': bookName,
      'A_Name': AuthorName,
      'description' : description,
      'P_Year': publishedYear,
      'B_price': bookPrice,
      'quantity': quantity,
      'D_Status': deleteStatus
    });
  }

  viewData() {
    return this.http.get<any>(this.viewBookUrl, {
    });
  }

  deleteaBook(id: number){
    return this.http.post<any>(this.deletebookUrl, {
      'id': id
    });
  }

  updateBook(id,data){
    return this.http.patch<any>(this.editBookDetails+id,data);
  }
}


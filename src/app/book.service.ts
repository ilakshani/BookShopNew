import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { fields } from './book-list/book-list.component';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(public http: HttpClient) { }

  public insertbookUrl = 'http://127.0.0.1:8000/api/insertnewbook';
  public viewBookUrl = 'http://127.0.0.1:8000/api/getalldetails';
  public deletebookUrl = 'http://127.0.0.1:8000/api/deletebook';
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
    return this.http.patch<any>('http://127.0.0.1:8000/api/editbookdetails/'+id,data);
  }
}


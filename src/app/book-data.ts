export class BookData {
    bookname : string;
    authorname : string;
    publishedyear : string;
    bookprice : Number;
    availablestatus : boolean;
    deletestatus : boolean;
    quantity : number;

    constructor(data:any){
        this.bookname = data['B_Name'];
        this.authorname = data['A_Name'];
        this.publishedyear = data['P_Year'];
        this.bookprice = data['B_Price'];
        this.availablestatus = data['A_Status'];
        this.deletestatus = data['D_Status'];
        this.quantity = data['quantity'];
      }

}

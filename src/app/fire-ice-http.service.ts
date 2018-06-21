import { Injectable } from '@angular/core';
//importing httpclient to make the requests
import { HttpClient,HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FireIceHttpService {

  public _everything=[];
  constructor(private _http:HttpClient) { }

  public getEverything(): any {
    let category = ["books", "characters", "houses"];
    let no = [1, 43, 9]; //each category page no taking page size as 50
    let bookPromises = []; //will store the promise sent after making http request to the book api
    let characterPromises = []; //will store the promise sent after making http request to the character api
    let housePromises = []; //will store the promise sent after making http request to the houses api
    let everything=[];

    for (let i = 0; i < category.length; i++) {
      //run the loop for each category
      for (let j = 0; j < no[i]; j++) {
        //for each category run the loop as many times as its page no taking page size as 50
        if (i === 0) {

          bookPromises.push(this._http.get(`https://anapioficeandfire.com/api/${category[i]}?page=${j + 1}&pageSize=50`)); //push each promise into the bookPromises array
        }
        if (i === 1) {

          characterPromises.push(this._http.get(`https://anapioficeandfire.com/api/${category[i]}?page=${j + 1}&pageSize=50`)); //push each promise into the characterPromises array
        }
        if (i === 2) {

          housePromises.push(this._http.get(`https://anapioficeandfire.com/api/${category[i]}?page=${j + 1}&pageSize=50`)); //push each promise into the housePromises array
        }

      } //end of inside for loop 
    } //end of the outer for loop

    Promise.all(bookPromises).then(function (data){
      bookPromises.forEach(element => {
        element.forEach(_books=>{
          _books.forEach(book => {
              everything.push(book);
          });
        });
      });
    });
    
    Promise.all(characterPromises).then(function(data){
      characterPromises.forEach(element => {
        element.forEach(_characters => {
          _characters.forEach(character => {
            everything.push(character);
          });
        });
      });
    });
    
    Promise.all(housePromises).then(function(data){
      housePromises.forEach(element => {
        element.forEach(_houses => {
          _houses.forEach(house => {
            everything.push(house);
          }); 
        });
      });
    });
    this._everything=everything;
    return {
      everything:everything
    }
    
  }
  public viewInformation(url:string):any{
    return this._http.get(url);
  }
}

import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  books: string[];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

  	this.http.get('http://localhost:3001/books.json')
  		.subscribe(data => {  			
  			this.books = <string[]> data;
  		});
  }
}

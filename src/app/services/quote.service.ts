import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  public quote: any;

  constructor(private http: HttpClient) {}

  public getQuote() {
    return this.http.get('https://api.quotable.io/random');
  }
}

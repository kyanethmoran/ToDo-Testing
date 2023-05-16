import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  public getApiValue: any;
  public postApiValue: any;

  constructor(private http: HttpClient) {}

  public getQuote() {
    this.http.get('https://api.quotable.io/random').subscribe((response) => {
      this.getApiValue = response;
      return this.getApiValue;
    }
  }
}

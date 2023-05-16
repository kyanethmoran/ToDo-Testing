import { Component } from '@angular/core';
import { QuoteService } from 'src/app/services/quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent {
  public quote: any;

  constructor(public quoteService: QuoteService) {}

  ngOnInit(): void {
    this.quote = 'Loading...';
    this.getRandomQuote();
  }

  getRandomQuote() {
    this.quoteService.getQuote().subscribe((data) => {
      this.quote = data;
    });
  }
}

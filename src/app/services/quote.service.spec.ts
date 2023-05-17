import { TestBed, getTestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { QuoteService } from './quote.service';
import { inject } from '@angular/core';

describe('QuoteService', () => {
  let service: QuoteService;
  let httpMock: HttpTestingController;
  let injector: TestBed;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [QuoteService],
    });
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: QuoteService = TestBed.get(QuoteService);
    expect(service).toBeTruthy();
  });

  // test for getQuote()
  it('should return a random quote', () => {
    const service: QuoteService = TestBed.get(QuoteService);

    service.getQuote().subscribe((quote) => {
      expect(quote).toBeDefined();
    });

    const req = httpMock.expectOne('https://api.quotable.io/random');
    expect(req.request.method).toBe('GET');
  });
});

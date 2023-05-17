import { TestBed, getTestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { QuoteService } from './quote.service';

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
    service = TestBed.get(QuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // test for getQuote()
  it('should return a random quote', () => {
    service.getQuote().subscribe((quote) => {
      expect(quote).toBeDefined();
    });

    const req = httpMock.expectOne('https://api.quotable.io/random');
    expect(req.request.method).toBe('GET');
  });
});

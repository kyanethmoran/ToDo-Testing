import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { QuoteService } from './quote.service';

describe('QuoteService', () => {
  let service: QuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [QuoteService],
    });
  });

  it('should be created', () => {
    const service: QuoteService = TestBed.get(QuoteService);
    expect(service).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { QuoteComponent } from './quote.component';
import { MatCardModule } from '@angular/material/card';

describe('QuoteComponent', () => {
  let component: QuoteComponent;
  let fixture: ComponentFixture<QuoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatCardModule],
      declarations: [QuoteComponent],
      providers: [],
    });

    fixture = TestBed.createComponent(QuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  //Test that ngOnInit() calls getRandomQuote()
  it('should call getRandomQuote() on ngOnInit()', () => {
    spyOn(component, 'getRandomQuote');
    component.ngOnInit();
    expect(component.getRandomQuote).toHaveBeenCalled();
  });

  //Test that getRandomQuote() calls quoteService.getQuote()
  it('should call quoteService.getQuote() on getRandomQuote()', () => {
    spyOn(component.quoteService, 'getQuote').and.callThrough();
    component.getRandomQuote();
    expect(component.quoteService.getQuote).toHaveBeenCalled();
  });
});

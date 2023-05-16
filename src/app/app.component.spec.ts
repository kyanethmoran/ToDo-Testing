import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { QuoteComponent } from './components/quote/quote.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatCardModule } from '@angular/material/card';
import { ItemComponent } from './components/item/item.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [AppComponent, QuoteComponent, ItemComponent],
      imports: [
        MatToolbarModule,
        HttpClientTestingModule,
        MatCardModule,
        MatCheckboxModule,
      ],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ToDo-Testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ToDo-Testing');
  });
});

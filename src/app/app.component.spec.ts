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

  //test if we get the items
  it('should get the items', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.items).toBeTruthy();
  });

  //test if we can add an item
  it('should add an item', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const item = { description: 'test', completed: false };
    app.addItem(item.description);
    expect(app.items).toContain(item);
  });

  //test if Add button calls addItem
  it('should call addItem with button click', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    spyOn(app, 'addItem');
    const compiled = fixture.nativeElement;
    const button = compiled.querySelector('button');
    button.click();
    expect(app.addItem).toHaveBeenCalled();
  });

  //test if 'Enter' key calls addItem
  it('should call addItem with Enter key press', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    spyOn(app, 'addItem');
    const compiled = fixture.nativeElement;
    const input = compiled.querySelector('input');
    const event = new KeyboardEvent('keyup', {
      key: 'Enter',
    });
    input.dispatchEvent(event);
    expect(app.addItem).toHaveBeenCalled();
  });

  //test if we can remove an item
  it('should remove an item', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const item = { description: 'test', completed: false };
    app.addItem(item.description);
    app.remove(item);
    expect(app.items).not.toContain(item);
  });

  //test if we render app-item
  it('should render app-item', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-item')).toBeTruthy();
  });

  //test if we render app-quote
  it('should render app-quote', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-quote')).toBeTruthy();
  });
});

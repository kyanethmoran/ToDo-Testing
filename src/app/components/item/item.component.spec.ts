import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ItemComponent } from './item.component';
import { Item } from 'src/app/interfaces/item';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemComponent],
      imports: [MatCheckboxModule],
    });
    fixture = TestBed.createComponent(ItemComponent);

    component = fixture.componentInstance;
    component.item = { description: 'test', completed: false } as Item;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

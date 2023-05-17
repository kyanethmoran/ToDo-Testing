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

  // Test that the item is not editable by default
  it('should not be editable by default', () => {
    expect(component.editable).toBe(false);
  });

  // Test that the item is editable when the edit button is clicked
  it('should be editable when the edit button is clicked', () => {
    const editButton = fixture.nativeElement.querySelector('#edit');
    editButton.click();
    expect(component.editable).toBe(true);
  });

  // Test that if editable is true, cancel & update buttons are visible
  it('should show the cancel button if editable is true', () => {
    component.editable = true;
    fixture.detectChanges();
    const cancelButton = fixture.nativeElement.querySelector('#cancel');
    const updateButton = fixture.nativeElement.querySelector('#update');
    expect(cancelButton).toBeTruthy();
    expect(updateButton).toBeTruthy();
  });

  //Test that if editable is false, edit and remove buttons are visible
  it('should show the edit button if editable is false', () => {
    const editButton = fixture.nativeElement.querySelector('#edit');
    const removeButton = fixture.nativeElement.querySelector('#remove');
    expect(editButton).toBeTruthy();
    expect(removeButton).toBeTruthy();
  });

  //Test that saveItem() saves the item description
  it('should save the item description', () => {
    component.saveItem('new description');
    expect(component.item.description).toBe('new description');
  });

  //Test that cancel button sets editable to false
  it('should set editable to false when cancel button is clicked', () => {
    component.editable = true;
    fixture.detectChanges();
    const cancelButton = fixture.nativeElement.querySelector('#cancel');
    cancelButton.click();
    expect(component.editable).toBe(false);
  });

  //Test that update button sets editable to false
  it('should set editable to false when update button is clicked', () => {
    component.editable = true;
    fixture.detectChanges();
    const updateButton = fixture.nativeElement.querySelector('#update');
    updateButton.click();
    expect(component.editable).toBe(false);
  });

  //Test that remove button emits an event
  it('should emit an event when remove button is clicked', () => {
    spyOn(component.remove, 'emit');
    const removeButton = fixture.nativeElement.querySelector('#remove');
    removeButton.click();
    expect(component.remove.emit).toHaveBeenCalled();
  });
});

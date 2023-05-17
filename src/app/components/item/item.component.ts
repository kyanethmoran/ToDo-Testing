import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../interfaces/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  editable = false;
  @Input() item!: Item;
  @Input() newItem!: Item;
  @Output() remove = new EventEmitter<Item>();

  saveItem(description: string) {
    this.item.description = description;
  }
}

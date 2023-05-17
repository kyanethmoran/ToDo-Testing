import { Component } from '@angular/core';
import { Item } from './interfaces/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ToDo-Testing';

  allItems = [
    { description: 'Get groceries', completed: false },
    { description: 'Call plumber', completed: false },
    { description: 'Buy running shoes', completed: false },
    { description: 'Buy flowers', completed: false },
  ];

  //get items
  get items() {
    return this.allItems;
  }

  //add items to the list

  //remove items from the list
  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}

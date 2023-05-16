import { Component } from '@angular/core';
import { Item } from './interfaces/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ToDo-Testing';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { description: 'Get groceries', completed: false },
    { description: 'Call plumber', completed: false },
    { description: 'Buy running shoes', completed: false },
    { description: 'Buy flowers', completed: false },
  ];

  //get items
  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(
      (item) => item.completed === (this.filter === 'done')
    );
  }

  //add items to the list
  addItem(description: string) {
    this.allItems.push({
      description,
      completed: false,
    });
  }

  //remove items from the list
  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}

import { Component } from '@angular/core';
// import { Item } from './interfaces/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ToDo-Testing';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { descriptiion: 'Get groceries', completed: false },
    { descriptiion: 'Call plumber', completed: false },
    { descriptiion: 'Buy running shoes', completed: false },
    { descriptiion: 'Buy flowers', completed: false },
  ];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(
      (item) => item.completed === (this.filter === 'done')
    );
  }

  //add items to the list
  addItem(descriptiion: string) {
    this.allItems.push({
      descriptiion,
      completed: false,
    });
  }

  //remove items from the list
  remove(item: any) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}

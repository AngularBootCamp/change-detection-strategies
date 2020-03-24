import { Injectable } from '@angular/core';

import { Item } from './item-types';

// This Data service is intentionally unrealistic; it exposes and
// manipulates the same data in two different ways, so that we can
// experiment with different change detection settings.

// For any real code, please pick one approach - the code will be
// shorter and better.

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  // Mutate State
  itemList1: Item[] = [];

  // Immutable State
  itemList2: Item[] = [];

  constructor() {
    this.populate();
  }

  toggleItem(itemIndex: number) {
    // Mutate State
    this.itemList1[itemIndex].completed = !this.itemList1[itemIndex]
      .completed;

    // Immutable State
    this.itemList2 = [...this.itemList2];
    this.itemList2[itemIndex] = {
      ...this.itemList2[itemIndex],
      completed: !this.itemList2[itemIndex].completed
    };
  }

  toggleAllItems() {
    // Mutate State
    this.itemList1.forEach(
      item => (item.completed = !item.completed)
    );

    // Immutable State
    this.itemList2 = this.itemList2.map(item => ({
      ...item,
      completed: !item.completed
    }));
  }

  addItem(newItem: Item) {
    // Mutate State
    this.itemList1.unshift(newItem); // add at the front

    // Immutable State
    this.itemList2 = [newItem, ...this.itemList2];
  }

  addRandomItem() {
    const num = Math.round(Math.random() * 10000);
    this.addItem(makeItem(num));
  }

  private populate() {
    this.addItem(makeItem(1));
    this.addItem(makeItem(2));
    this.addItem(makeItem(3));
  }
}

function makeItem(n: number) {
  return {
    name: 'Item ' + n,
    description:
      'I am Item ' + n + ', otherwise here is some text to look at.',
    completed: false
  };
}

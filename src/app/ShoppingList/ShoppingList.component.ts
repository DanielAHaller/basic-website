import { Component } from '@angular/core';
import { ItemComponent } from '../item/item.component';

const OriginalList: ItemComponent[] = [
    {name: "Sweet Potato", quantity: 5, notes: ""},
    {name: "Carrots", quantity: 1, notes: "Bag"},
    {name: "Chips", quantity: 2, notes: "Black Bean"}
];

@Component({
    selector: 'app-ShoppingList',
    templateUrl: './ShoppingList.component.html'
})
export class ShoppingListComponent {
    storeName: string;
    date: number;
    shoppingList: ItemComponent[];
    
    constructor() {
        this.shoppingList = OriginalList;
    }

}
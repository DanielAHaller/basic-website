import { Component } from '@angular/core';
import { ShoppingListComponent } from './ShoppingList/ShoppingList.component';

const GroceryList: ShoppingListComponent[] = [
  {storeName: "Giant", date: 1, shoppingList: [
    {name: "Sweet Potato", quantity: 5, notes: ""},
    {name: "Carrots", quantity: 1, notes: "Bag"},
    {name: "Chips", quantity: 2, notes: "Black Bean"}]},
  {storeName: "Costco", date: 2, shoppingList: []}
];



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shopping List App';
  groceryList = GroceryList;
}


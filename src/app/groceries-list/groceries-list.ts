import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { itemLists } from './itemList'; 
@Component({
  imports: [FormsModule],
  selector: 'app-groceries-list',
  styleUrl: './groceries-list.scss',
  templateUrl: './groceries-list.html',
})
export class GroceriesList {
item: string="";
list: itemLists[] = [];
addItem(){
  let ItemLists = new itemLists();
  ItemLists.name = this.item;
  ItemLists.id = this.list.length;

  this.list.push(ItemLists)
this.item="";

console.table(this.list)

}

}
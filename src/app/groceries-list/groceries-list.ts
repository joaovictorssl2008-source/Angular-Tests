import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { item_list } from './itemList'; 
import { CommonModule } from '@angular/common';
@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-groceries-list',
  styleUrl: './groceries-list.scss',
  templateUrl: './groceries-list.html',
})
export class GroceriesList {
item: string="";
list: item_list[] = [];
addItem(){
  let ItemLists = new item_list();
  ItemLists.name = this.item;
  ItemLists.id = this.list.length + 1;

  this.list.push(ItemLists)
this.item="";

console.table(this.list)

}
riskItem(ItemLists: item_list){
  ItemLists.bought = !ItemLists.bought
}

clearList() {
  this.list = []
}
}
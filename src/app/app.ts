import { Component, signal } from '@angular/core';
import {Calculator} from './calculator/calculator';
import { GroceriesList } from './groceries-list/groceries-list';
import { FormsModule } from '@angular/forms';
@Component({
  imports: [GroceriesList, FormsModule],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('project1');
}

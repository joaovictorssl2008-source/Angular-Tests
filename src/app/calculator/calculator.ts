import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-calculator',
  styleUrl: './calculator.scss',
  templateUrl: './calculator.html',
})
export class Calculator {
  number1:number=0;
  number2:number=0;
  result:number=0;


  calculateResult(){
    this.result = this.number1 - this.number2;
  }

  calculateResult2(){
    this.result = this.number1 + this.number2;
  }

  calculateResult3(){
    this.result = this.number1 * this.number2;
  }
}
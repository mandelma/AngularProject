import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [CommonModule, FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  display_str: string = "";
  selectedNum: string = "";
  num_1: number | null= null;
  num_2: number | null = null;
  isGo: boolean = false;

  selectedCalculation: string = ''
  result: number  = 0;
  isResult: boolean = false;

  // Select to add number to num_1 or to num_2
  btnSelected = (showNumber: any) => {
    
    if (this.isResult) return;

    this.selectedNum += showNumber;
    this.display_str += showNumber;

    if (!this.isGo) {
      this.num_1 = parseInt(this.selectedNum) || 0;
    } else {
      this.num_2 = parseInt(this.selectedNum) || 0;
    }
  }

  btnAction = (symbol: string) => {
    this.isGo = true;
    this.selectedNum = "";
    const allSymbols: string = '/*+-';
    let isAlreadySymbol: boolean = [...this.display_str].some(item => allSymbols.includes(item));
    
    console.log("isSymbolIn " + isAlreadySymbol);
    if (isAlreadySymbol) {
      console.log("Str includes " + symbol)
      return
    } else {
      console.log("Pressed s: " + symbol);
      this.selectedCalculation = symbol;
      this.display_str = this.display_str +" " + symbol + " ";
    }
    
  }


  calculate = () => {
    if (this.isResult) return;
    if (this.num_1 !== null && this.num_2 !== null) {
    
      switch (this.selectedCalculation) {
        case '/':
          this.result = this.num_1 / this.num_2;
          this.display_str += (' = ' + this.result);
          this.isResult = true;
          break;
        case '*':
          this.result = this.num_1 * this.num_2;
          this.display_str += (' = ' + this.result);
          this.isResult = true;
          break;
        case '+':
          this.result = this.num_1 + this.num_2;
          this.display_str += (' = ' + this.result);
          console.log("N1 ja n2 " + this.num_1 + " " + this.num_2)
          console.log("Result - " + this.result);
          this.isResult = true;
          break;
        case '-':
          this.result = this.num_1 - this.num_2;
          this.display_str += (' = ' + this.result);
          this.isResult = true;
          break;
        default:
          console.log("No calculation found!")

      }
    }
  }

  clearDisplay = () => {
    console.log("Display is cleared!");
    this.display_str = "";
    this.num_1 = null;
    this.num_2 = null;
    this.isGo = false;
    this.isResult = false;
    this.selectedNum = "";
  }
}

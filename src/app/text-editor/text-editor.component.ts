import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TextSizeDirective } from '../text-size.directive';

import { TextBoxViewDirective } from '../text-box-view.directive';

@Component({
  selector: 'app-text-editor',
  imports: [CommonModule, TextSizeDirective, TextBoxViewDirective, FormsModule],
  templateUrl: './text-editor.component.html',
  styleUrl: './text-editor.component.css'
})
export class TextEditorComponent {
  fontSize: string = '14px';
  textColor: string = "";
  backgroundColor: string = "";
  textAreaView: Object = {};
  textCreated: string = '';
  sizes: string[] = ['14px', '16px', '24px', '28px'];
  selectedSize: string = '14px';

  setSize = () => {
    this.fontSize = this.selectedSize;
  }
  
  setTextAreaView = (view: Object) => {
    this.textAreaView = view;
  }
}

import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextBoxView]'
})
export class TextBoxViewDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @Input('appTextBoxView') set appTextStyle(style: { color?: string; bgColor?: string }) {
    if (style.color) {
      this.renderer.setStyle(this.el.nativeElement, 'color', style.color);
    }
    if (style.bgColor) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', style.bgColor);
    }
  }

}

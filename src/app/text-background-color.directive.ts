import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextBackgroundColor]'
})
export class TextBackgroundColorDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @Input('appTextBackgroundColor') set backgroundColor(value: string) {
      this.setTextBackgroundColor(value);
    }

   private setTextBackgroundColor(color: string) {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', color);
  }

}

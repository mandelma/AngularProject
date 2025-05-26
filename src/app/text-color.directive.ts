import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

   @Input('appTextColor') set textColor(value: string) {
      this.setTextColor(value);
    }

   private setTextColor(color: string) {
    this.renderer.setStyle(this.element.nativeElement, 'color', color);
  }

}

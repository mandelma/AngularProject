import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextSize]'
})
export class TextSizeDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @Input('appTextSize') set textSize(value: string) {
      this.setFontSize(value);
    }

   private setFontSize(size: string) {
    this.renderer.setStyle(this.element.nativeElement, 'font-size', size);
  }

}

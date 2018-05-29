import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomHover]'
})
export class CustomHoverDirective {

  @Input()
  hoverColor: string;
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'Maroon'
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.hiliteColor(this.hoverColor);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.hiliteColor('blue');
  }

  hiliteColor(color) {
    this.el.nativeElement.style.color = color;
  }
}

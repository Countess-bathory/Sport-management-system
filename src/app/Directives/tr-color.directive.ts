import { element } from 'protractor';
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTrColor]'
})
export class TrColorDirective {

  constructor(private el:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'green'; 

  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = null; 

  }

}

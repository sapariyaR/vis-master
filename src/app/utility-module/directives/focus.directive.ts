import {Directive, ElementRef, AfterViewInit, OnInit, Input} from '@angular/core';

@Directive({selector: '[focus]'})
export class FocusDirective implements OnInit {
  
  @Input('focus') isFocused: boolean;
  
  constructor(private hostElement: ElementRef) {
  }
  
  ngOnInit() {
    if (this.isFocused) {
      this.hostElement.nativeElement.focus();
    }
  }
}

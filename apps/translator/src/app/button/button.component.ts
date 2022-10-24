import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'caribbean-developers-conference-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() position: 'start' | 'center' | 'end' = 'end'
  @Output() clicked = new EventEmitter();
}

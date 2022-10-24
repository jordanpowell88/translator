import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'caribbean-developers-conference-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Output() changed: EventEmitter<string> = new EventEmitter()

  onChange(event: KeyboardEvent): void {
    this.changed.emit((event.target as HTMLInputElement).value)
  }
}

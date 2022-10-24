import { Component, Input } from '@angular/core';

@Component({
  selector: 'caribbean-developers-conference-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent {
  @Input() error: string | null | undefined = null;
}

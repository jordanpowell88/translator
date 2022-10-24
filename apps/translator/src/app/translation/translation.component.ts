import { Component, Input } from '@angular/core';

@Component({
  selector: 'caribbean-developers-conference-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss'],
})
export class TranslationComponent {
  @Input() translation: string | null = null;
}

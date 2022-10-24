import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'caribbean-developers-conference-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss'],
})
export class TranslationComponent {
  translation$: Observable<string> = of();
}

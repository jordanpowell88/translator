import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslationsSelectors, TranslationsActions } from '@caribbean-developers-conference/state';

@Component({
  selector: 'caribbean-developers-conference-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  textToTranslate!: string;
  translation$ = this.store.select(TranslationsSelectors.getTranslation)
  loaded$ = this.store.select(TranslationsSelectors.getTranslationsLoaded)
  error$ = this.store.select(TranslationsSelectors.getTranslationsError);

  constructor(private readonly store: Store) {}

  translate(): void {
    this.store.dispatch(TranslationsActions.loadTranslations({ translate: this.textToTranslate }))
  }
}

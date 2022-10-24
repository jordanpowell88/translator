import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as TranslationsActions from './translations.actions';
import { TranslationsEffects } from './translations.effects';

describe('TranslationsEffects', () => {
  let actions: Observable<Action>;
  let effects: TranslationsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        TranslationsEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(TranslationsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: TranslationsActions.initTranslations() });

      const expected = hot('-a-|', {
        a: TranslationsActions.loadTranslationsSuccess({ translations: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

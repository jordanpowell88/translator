import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';

import * as TranslationsActions from './translations.actions';
import { TranslationsEffects } from './translations.effects';
import { TranslationsService } from './translations.service';
import { TranslateResponse } from '@caribbean-developers-conference/api-interfaces';
import { Injectable } from '@angular/core';

@Injectable()
class MockTranslationsService extends TranslationsService {
  override translate(text: string): Observable<TranslateResponse> {
    return text === 'error'
      ? new Observable((subscriber) => subscriber.error())
      : of({ translation: text });
  }
}

describe('TranslationsEffects', () => {
  let actions: Observable<Action>;
  let effects: TranslationsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TranslationsEffects,
        {
          provide: TranslationsService,
          useClass: MockTranslationsService,
        },
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(TranslationsEffects);
  });

  describe('loadTranslations$', () => {
    it('should work', () => {
      actions = hot('-a-|', {
        a: TranslationsActions.loadTranslations({ translate: 'hello' }),
      });

      const expected = hot('-a-|', {
        a: TranslationsActions.loadTranslationsSuccess({
          translation: 'hello',
        }),
      });

      expect(effects.loadTranslations$).toBeObservable(expected);
    });

    it('should throw an error', () => {
      actions = hot('-a-|', {
        a: TranslationsActions.loadTranslations({ translate: 'error' }),
      });

      const expected = hot('-a-|', {
        a: TranslationsActions.loadTranslationsFailure({
          error:
            'Sorry, but there was a problem fetching an accurate translation',
        }),
      });

      expect(effects.loadTranslations$).toBeObservable(expected);
    });
  });
});

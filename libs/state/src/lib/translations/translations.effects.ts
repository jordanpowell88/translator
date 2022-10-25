import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs';

import * as TranslationsActions from './translations.actions';
import { TranslationsService } from './translations.service';

@Injectable()
export class TranslationsEffects {
  loadTranslations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TranslationsActions.loadTranslations),
      fetch({
        run: ({ translate }) => {
          return this.service.translate(translate).pipe(
            map(({translation }) => translation),
            map((translation) => TranslationsActions.loadTranslationsSuccess({ translation })))
        },
        onError: (action, error) => {
          return TranslationsActions.loadTranslationsFailure({ error: 'Sorry, but there was a problem fetching an accurate translation' });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions, private readonly service: TranslationsService) {}
}

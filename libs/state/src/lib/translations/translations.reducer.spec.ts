import { Action } from '@ngrx/store';

import * as TranslationsActions from './translations.actions';
import { TranslationsEntity } from './translations.models';
import {
  TranslationsState,
  initialTranslationsState,
  translationsReducer,
} from './translations.reducer';

describe('Translations Reducer', () => {
  const createTranslationsEntity = (
    id: string,
    name = ''
  ): TranslationsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Translations actions', () => {
    it('loadTranslationsSuccess should return the list of known Translations', () => {
      const translations = [
        createTranslationsEntity('PRODUCT-AAA'),
        createTranslationsEntity('PRODUCT-zzz'),
      ];
      const action = TranslationsActions.loadTranslationsSuccess({
        translations,
      });

      const result: TranslationsState = translationsReducer(
        initialTranslationsState,
        action
      );

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = translationsReducer(initialTranslationsState, action);

      expect(result).toBe(initialTranslationsState);
    });
  });
});

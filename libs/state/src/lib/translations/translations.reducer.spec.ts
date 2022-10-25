import { Action } from '@ngrx/store';

import * as TranslationsActions from './translations.actions';
import {
  TranslationsState,
  initialTranslationsState,
  translationsReducer,
} from './translations.reducer';

describe('Translations Reducer', () => {

  describe('initialize a Translation request', () => {
    it('loadTranslations should initialize', () => {
      const translate = 'hello';
      const action = TranslationsActions.loadTranslations({
        translate,
      });

      const result: TranslationsState = translationsReducer(
        initialTranslationsState,
        action
      );

      expect(result.translation).toBeNull();
      expect(result.loaded).toBe(false);
      expect(result.error).toBeNull()
    });
  });
  describe('valid Translations actions', () => {
    it('loadTranslationsSuccess should return the list of known Translations', () => {
      const translation = 'Hola'
      const action = TranslationsActions.loadTranslationsSuccess({
        translation,
      });

      const result: TranslationsState = translationsReducer(
        initialTranslationsState,
        action
      );

      expect(result.translation).toEqual(translation);
      expect(result.loaded).toBe(true);
      expect(result.error).toBeNull();
    });
  });

  describe('invalid Translations actions', () => {
    it('loadTranslationsFailure should throw an error', () => {
      const error = 'my test failure';
      const action = TranslationsActions.loadTranslationsFailure({
        error,
      });

      const result: TranslationsState = translationsReducer(
        initialTranslationsState,
        action
      );

      expect(result.translation).toEqual(initialTranslationsState.translation);
      expect(result.loaded).toBe(false);
      expect(result.error).toEqual(error);
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

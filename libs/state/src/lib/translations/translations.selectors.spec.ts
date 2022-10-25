import {
  TranslationsPartialState,
  initialTranslationsState,
  TRANSLATIONS_FEATURE_KEY,
} from './translations.reducer';
import * as TranslationsSelectors from './translations.selectors';

describe('Translations Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const TRANSLATION = 'hola';

  let state: TranslationsPartialState;

  beforeEach(() => {
    state = {
      translations: {
        loaded: true,
        error: ERROR_MSG,
        translation: TRANSLATION 
      }
    };
  });

  describe('Translations Selectors', () => {
    it('getTranslation() should return the Translation', () => {
      const result = TranslationsSelectors.getTranslation(state);

      expect(result).toEqual(TRANSLATION)
    });

    it('getTranslationsLoaded() should return the current "loaded" status', () => {
      const result = TranslationsSelectors.getTranslationsLoaded(state);

      expect(result).toBe(true);
    });

    it('getTranslationsError() should return the current "error" state', () => {
      const result = TranslationsSelectors.getTranslationsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});

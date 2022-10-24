import { TranslationsEntity } from './translations.models';
import {
  translationsAdapter,
  TranslationsPartialState,
  initialTranslationsState,
} from './translations.reducer';
import * as TranslationsSelectors from './translations.selectors';

describe('Translations Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getTranslationsId = (it: TranslationsEntity) => it.id;
  const createTranslationsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as TranslationsEntity);

  let state: TranslationsPartialState;

  beforeEach(() => {
    state = {
      translations: translationsAdapter.setAll(
        [
          createTranslationsEntity('PRODUCT-AAA'),
          createTranslationsEntity('PRODUCT-BBB'),
          createTranslationsEntity('PRODUCT-CCC'),
        ],
        {
          ...initialTranslationsState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Translations Selectors', () => {
    it('getAllTranslations() should return the list of Translations', () => {
      const results = TranslationsSelectors.getAllTranslations(state);
      const selId = getTranslationsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = TranslationsSelectors.getSelected(
        state
      ) as TranslationsEntity;
      const selId = getTranslationsId(result);

      expect(selId).toBe('PRODUCT-BBB');
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

import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  TRANSLATIONS_FEATURE_KEY,
  TranslationsState,
} from './translations.reducer';

// Lookup the 'Translations' feature state managed by NgRx
export const getTranslationsState = createFeatureSelector<TranslationsState>(
  TRANSLATIONS_FEATURE_KEY
);


export const getTranslationsLoaded = createSelector(
  getTranslationsState,
  (state: TranslationsState) => state.loaded
);

export const getTranslationsError = createSelector(
  getTranslationsState,
  (state: TranslationsState) => state.error
);

export const getTranslation = createSelector(
  getTranslationsState,
  (state: TranslationsState) => state.translation
);

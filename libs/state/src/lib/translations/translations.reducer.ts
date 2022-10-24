import { Action, createReducer, on } from '@ngrx/store';

import * as TranslationsActions from './translations.actions';

export const TRANSLATIONS_FEATURE_KEY = 'translations';

export interface TranslationsState {
  translation: string | null
  loaded: boolean; 
  error?: string | null;
}

export interface TranslationsPartialState {
  readonly [TRANSLATIONS_FEATURE_KEY]: TranslationsState;
}

export const initialTranslationsState: TranslationsState = {
  translation: null,
  loaded: false,
  error: null
}

const reducer = createReducer<TranslationsState>(
  initialTranslationsState,
  on(TranslationsActions.loadTranslations, (state) => ({
    ...state,
    translation: null,
    loaded: false,
    error: null,
  })),
  on(TranslationsActions.loadTranslationsSuccess, (state, { translation }) => ({
    ...state,
    loaded: true,
    translation,
    error: null
  })),
  on(TranslationsActions.loadTranslationsFailure, (state, { error }) => ({
    ...state,
    loaded: true,
    error,
  }))
);

export function translationsReducer(
  state: TranslationsState | undefined,
  action: Action
) {
  return reducer(state, action);
}

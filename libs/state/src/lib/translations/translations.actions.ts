import { createAction, props } from '@ngrx/store';

export const loadTranslations = createAction('[Translations Page] Load Translations', props<{ translate: string }>());

export const loadTranslationsSuccess = createAction(
  '[Translations/API] Load Translations Success',
  props<{ translation: string }>()
);

export const loadTranslationsFailure = createAction(
  '[Translations/API] Load Translations Failure',
  props<{ error: any }>()
);

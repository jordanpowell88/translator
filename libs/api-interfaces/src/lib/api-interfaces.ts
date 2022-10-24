export type Languages = 'English' | 'Spanish';
export type LanguageCodes = 'en' | 'es';

export interface TranslateRequestBody {
  text: string
  sourceLanguageCode: LanguageCodes
}

export interface TranslateResponse {
  translation: string;
}
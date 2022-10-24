import { NgModule } from "@angular/core";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { translationsReducer, TRANSLATIONS_FEATURE_KEY } from "./translations.reducer";
import { TranslationsEffects } from "./translations.effects";
import { TranslationsService } from "./translations.service";

@NgModule({
    imports: [
        StoreModule.forFeature(TRANSLATIONS_FEATURE_KEY, translationsReducer),
        EffectsModule.forFeature([TranslationsEffects])
    ],
    providers: [TranslationsService]
})
export class TranslationsStateModule {}
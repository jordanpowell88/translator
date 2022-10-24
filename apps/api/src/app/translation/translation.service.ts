import { Injectable } from '@nestjs/common';
import { v2 } from '@google-cloud/translate'
import { LanguageCodes } from '@caribbean-developers-conference/api-interfaces';
import { environment } from '../../environments/environment';

@Injectable()
export class TranslationService {
    private service = new v2.Translate({ projectId:  environment.projectId })

    private generateTargetLanguageCode(sourceLanguageCode: LanguageCodes): LanguageCodes {
        return sourceLanguageCode === 'en' ? 'es' : 'en'
    }

    async translate(text: string, sourceLanguageCode: LanguageCodes): Promise<string> {
        const [translation] = await this.service.translate(text, this.generateTargetLanguageCode(sourceLanguageCode))
        console.log(translation)
        return translation;
    }
}

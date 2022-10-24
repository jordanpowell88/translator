import { TranslateRequestBody, TranslateResponse } from '@caribbean-developers-conference/api-interfaces';
import { Body, Controller, Post } from '@nestjs/common';
import { TranslationService } from './translation/translation.service';



@Controller()
export class AppController {
  constructor(private readonly service: TranslationService) {}

  @Post('translate')
  async makeTranslation(@Body() body: TranslateRequestBody): Promise<TranslateResponse> {
    const { text, sourceLanguageCode  } = body;
    
    const translation = await this.service.translate(text, sourceLanguageCode);

    return { translation }
  }
}

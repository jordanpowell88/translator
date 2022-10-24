import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { TranslationService} from './translation/translation.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [TranslationService],
})
export class AppModule {}

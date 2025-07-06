import { Module } from '@nestjs/common';
import { LanguageModule } from './interfaces/modules/language.module';
import { CountryModule } from './interfaces/modules/country.module';

@Module({
  imports: [LanguageModule, CountryModule],
})
export class AppModule {}
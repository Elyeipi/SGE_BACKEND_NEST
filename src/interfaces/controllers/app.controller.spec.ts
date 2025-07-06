import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { LANGUAGE_REPOSITORY } from 'src/shared/app.constants';
import { LanguagePrismaRepository } from 'src/application/implementation/LanguagePrismaRepository';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: LANGUAGE_REPOSITORY,
          useClass: LanguagePrismaRepository
        }
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});

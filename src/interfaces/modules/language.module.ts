import { Module } from "@nestjs/common";
import { LanguageController } from "../controllers/language.controller";
import { LanguagePrismaRepository } from "src/application/implementation/LanguagePrismaRepository";
import { PrismaModule } from "src/infraestructure/database/prisma.module";
import { LANGUAGE_REPOSITORY } from "src/shared/app.constants";

@Module({
    imports: [PrismaModule],
    controllers: [LanguageController],
    providers: [
        {
            provide: LANGUAGE_REPOSITORY,
            useClass: LanguagePrismaRepository
        }
    ]
})
export class LanguageModule{}

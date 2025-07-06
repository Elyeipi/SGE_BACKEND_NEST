import { Module } from "@nestjs/common";
import { LanguageController } from "../controllers/language.controller";
import { PrismaModule } from "src/infraestructure/database/prisma.module";
import { COUNTRY_REPOSITORY } from "src/shared/app.constants";
import { CountryPrismaRepository } from "src/application/implementation/CountryPrismaRepository";
import { CountryController } from "../controllers/country.controller";

@Module({
    imports: [PrismaModule],
    controllers: [CountryController],
    providers: [
        {
            provide: COUNTRY_REPOSITORY,
            useClass: CountryPrismaRepository
        }
    ]
})
export class CountryModule{}

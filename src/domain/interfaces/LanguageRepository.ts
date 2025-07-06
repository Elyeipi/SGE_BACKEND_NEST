import { PrismaPromise } from "generated/prisma";
import { LanguageCreateDto } from "src/application/dto/Language/LanguageCreateDto";
import { LanguageDto } from "src/application/dto/Language/LanguageDto";

export interface LanguageRepository{
    create(language : LanguageCreateDto) : Promise<LanguageDto>
    findById(id : number) : Promise<LanguageDto | null>
    findAll() : Promise<LanguageDto[]>
}


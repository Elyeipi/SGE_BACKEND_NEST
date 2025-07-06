import { Body, Controller, Get, Inject, Param, Post } from "@nestjs/common";
import { LanguageCreateDto } from "src/application/dto/Language/LanguageCreateDto";
import { LanguageDto } from "src/application/dto/Language/LanguageDto";
import { LanguageRepository } from "src/domain/interfaces/LanguageRepository";
import { LANGUAGE_REPOSITORY } from "src/shared/app.constants";

@Controller("languages")
export class LanguageController{

    constructor(
        @Inject(LANGUAGE_REPOSITORY)
        private readonly languageRepository : LanguageRepository
    ){}
    
    @Post()
    create(@Body() language : LanguageCreateDto) : Promise<LanguageDto>{
        return this.languageRepository.create(language);
    }
    
    @Get()
    findAll() : Promise<LanguageDto[]>{
        return this.languageRepository.findAll();
    }

    @Get(":id")
    findById(@Param("id") id : number) : Promise<LanguageDto | null>{
        return this.languageRepository.findById(id)
    }
}
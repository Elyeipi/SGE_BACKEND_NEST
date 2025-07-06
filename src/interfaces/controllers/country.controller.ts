import { Body, Controller, Get, Inject, Param, Post } from "@nestjs/common";
import { CountryCreateDTO } from "src/application/dto/Country/CountryCreateDTO";
import { CountryDTO } from "src/application/dto/Country/CountryDTO";
import { CountryRepository } from "src/domain/interfaces/CountryRepository";
import { COUNTRY_REPOSITORY } from "src/shared/app.constants";


@Controller("countries")
export class CountryController{
    constructor(@Inject(COUNTRY_REPOSITORY) private readonly countryRepository : CountryRepository){}
    
    @Get()
    findAll() : Promise<CountryDTO[]>{
        return this.countryRepository.findAll();
    }

    @Get(':id')
    findById(@Param('id') id : number) : Promise<CountryDTO | null>{
        return this.countryRepository.findById(id);
    }

    @Post()
    create(@Body() country : CountryCreateDTO) : Promise<CountryDTO>{
        return this.countryRepository.create(country);
    }
}
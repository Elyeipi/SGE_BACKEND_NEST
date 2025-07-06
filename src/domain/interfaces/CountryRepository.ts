import { CountryCreateDTO } from "src/application/dto/Country/CountryCreateDTO";
import { CountryDTO } from "src/application/dto/Country/CountryDTO";

export interface CountryRepository{
    create(country : CountryCreateDTO) : Promise<CountryDTO>
    findById(id : number) : Promise<CountryDTO | null>
    findAll() : Promise<CountryDTO[]>
}
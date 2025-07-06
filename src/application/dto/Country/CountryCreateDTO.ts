import { IsString, MaxLength } from "class-validator";

export class CountryCreateDTO{
    @IsString()
    @MaxLength(100)
    name : string;
}
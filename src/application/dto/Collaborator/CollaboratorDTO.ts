import { IsArray, IsNumber, IsOptional, IsString, isValidationOptions, MaxLength, Validate, ValidateNested } from "class-validator";
import { DisciplineDto } from "../Discipline/DisciplineDto";
import { Type } from "class-transformer";
import { LanguageDto } from "../Language/LanguageDto";
import { CountryDTO } from "../Country/CountryDTO";


export class CollaboratorDTO{
    @IsNumber()
    @IsOptional()
    id : number;

    @IsString()
    @MaxLength(50)
    firstname : string;
    @IsString()
    @MaxLength(50)
    lastname : string;
    @IsString()
    @MaxLength(50)
    department : string;
    @IsString()
    @MaxLength(150)
    institution: string;
    @IsString()
    @MaxLength(255)
    ORCID : string;
    @IsString()
    @MaxLength(255)
    primary_email : string;
    @IsString()
    @MaxLength(255)
    secondary_email : string;
    @IsString()
    @MaxLength(50)
    primary_phone : string;
    @IsString()
    @MaxLength(50)
    secondary_phone : string;
    @IsString()
    @MaxLength(255)
    web_url : string;
    @IsString()
    @MaxLength(255)
    address : string;
    
    @IsNumber()
    country_id : number;

    @Validate(() => CountryDTO)
    @IsOptional()
    country : CountryDTO | null  = null;
    
    @IsArray()
    @ValidateNested({ each : true })
    @Type(() => DisciplineDto)
    disciplines : DisciplineDto[] = [];
    @IsArray()
    @ValidateNested({ each : true })
    @Type(() => LanguageDto)
    languages : LanguageDto[] = [];

    // @IsArray()
    // @IsNumber({}, { each : true })
    // @IsOptional()
    // works : [];
}
import { IsArray, IsNumber, IsOptional, IsString, isValidationOptions, MaxLength } from "class-validator";


export class CollaboratorCreateDTO{
    @IsNumber()
    @IsOptional()
    id : Number;

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
    @IsOptional()
    country : Number;
    
    @IsArray()
    @IsNumber({}, { each : true })
    @IsOptional()
    disciplines : Number[];
    @IsArray()
    @IsNumber({}, { each : true })
    @IsOptional()
    languages : Number[];
    @IsArray()
    @IsNumber({}, { each : true })
    @IsOptional()
    works : Number[];
}
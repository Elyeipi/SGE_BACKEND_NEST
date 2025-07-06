import { IsArray, IsNumber, IsOptional, IsString, MaxLength, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CollaboratorDTO } from "../Collaborator/CollaboratorDTO";

export class CountryDTO{
    @IsNumber()
    id : Number;

    @IsString()
    @MaxLength(100)
    name : string;

    @IsArray()
    @ValidateNested({ each : true })
    @Type(() => CollaboratorDTO)
    collaborators : CollaboratorDTO[]
}
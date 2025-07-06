import { Type } from "class-transformer";
import { IsArray, IsNumber, IsOptional, IsString, MaxLength, ValidateNested } from "class-validator";
import { CollaboratorDTO } from "../Collaborator/CollaboratorDTO";

export class DisciplineDto{
    @IsNumber()
    id : number;

    @IsString()
    @MaxLength(25)
    name : string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CollaboratorDTO)
    collaborators : CollaboratorDTO[]

    // @IsArray()
    // @ValidateNested({ each: true })
    // @Type(() => CollaboratorDto)
    // works : WorkDTO[]

}
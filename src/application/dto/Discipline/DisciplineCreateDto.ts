import { IsNumber, IsString, MaxLength } from "class-validator";


export class DisciplineCreateDto{
    @IsString()
    @MaxLength(25)
    name : string;
}
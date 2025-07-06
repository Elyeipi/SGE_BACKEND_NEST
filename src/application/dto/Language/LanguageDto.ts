import { IsString, IsNotEmpty, IsInt, IsNumber } from "class-validator";

export class LanguageDto{
    @IsInt()
    @IsNotEmpty()
    id : Number;

    @IsString()
    @IsNotEmpty()
    name : string;

}
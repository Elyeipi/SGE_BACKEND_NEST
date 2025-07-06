import { IsString, IsNotEmpty, MaxLength, IsOptional, IsAlphanumeric } from 'class-validator'

export class LanguageCreateDto{
    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    name: string;
}


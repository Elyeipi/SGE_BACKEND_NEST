import { Injectable } from "@nestjs/common";
import { LanguageRepository } from "src/domain/interfaces/LanguageRepository";
import { LanguageCreateDto } from "../dto/Language/LanguageCreateDto";
import { LanguageDto } from "../dto/Language/LanguageDto";
import { PrismaService } from "src/infraestructure/database/prisma.service";

@Injectable()
export class LanguagePrismaRepository implements LanguageRepository{
    
    constructor(private readonly prismaService : PrismaService){}

    async create(language: LanguageCreateDto): Promise<LanguageDto> {
        
        const created = await this.prismaService.language.create(
            { data: language },
        );
        
        return {
            ...created,
            id : Number(created.id)
        } 
    }

    async findAll(): Promise<LanguageDto[]> {
        const list = await this.prismaService.language.findMany();
        return list.map(e => ({...e, id: Number(e.id)}))
    }

    async findById(id: number): Promise<LanguageDto | null> {
        const finded = await this.prismaService.language.findUnique({
            where : {id: BigInt(id)},
        });
        
        return finded ? {
            ...finded,
            id: Number(finded.id)
        } : null
    }
}
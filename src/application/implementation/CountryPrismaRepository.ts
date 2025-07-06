import { CountryRepository } from "src/domain/interfaces/CountryRepository";
import { CountryCreateDTO } from "../dto/Country/CountryCreateDTO";
import { CountryDTO } from "../dto/Country/CountryDTO";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/infraestructure/database/prisma.service";

@Injectable()
export class CountryPrismaRepository implements CountryRepository{

    constructor(private readonly prismaService : PrismaService){}

    async create(country: CountryCreateDTO): Promise<CountryDTO> {
        const res = await this.prismaService.country.create(
            { data: country },
        );

        return {...res, 
            id: Number(res.id),
            collaborators: []
        };

    }

    async findAll(): Promise<CountryDTO[]> {
        const res = await this.prismaService.country.findMany({
            include: {
                collaborators: true
            }
        });
        
        return res.map(e => (
            {
                ...e,
                id: Number(e.id),
                collaborators: []
            }
        ));
    }

    async findById(id: number): Promise<CountryDTO | null> {
        const res = await this.prismaService.country.findUnique({
            where: {
                id: id
            }
        });

        return res ? {
            ...res,
            id: Number(res.id),
            collaborators : []
        } : null
    }
}
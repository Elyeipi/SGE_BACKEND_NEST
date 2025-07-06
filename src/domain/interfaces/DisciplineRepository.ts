import { DisciplineCreateDto } from "src/application/dto/Discipline/DisciplineCreateDto";
import { DisciplineDto } from "src/application/dto/Discipline/DisciplineDto";

export interface DisciplineRepository{
    create(discipline : DisciplineCreateDto) : Promise<DisciplineDto>
    findById(id : number) : Promise<DisciplineDto | null>
    findAll() : Promise<DisciplineDto[]>
}
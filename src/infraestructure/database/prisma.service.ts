import { INestApplication, Module, OnModuleInit } from '@nestjs/common'
import { PrismaClient, Prisma } from '../../../generated/prisma/client'
import { never } from 'rxjs';

export class PrismaService extends PrismaClient<Prisma.PrismaClientOptions, 'beforeExit'> implements OnModuleInit{
    async onModuleInit() {
        await this.$connect();
    }

    async enableShutdownHooks(app : INestApplication){
        this.$on('beforeExit', async () =>{
            await app.close()
        })
    }
}
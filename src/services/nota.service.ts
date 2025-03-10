import { HttpException } from "../exceptions/HttpException2";
import { prisma } from "../database/database";
import { Nota, PrismaClient, User } from "@prisma/client";
//const prisma = new PrismaClient()

export class notaService {

    static async getById(id: number){
        const findnota = await prisma.nota.findUnique({ where: {id}})
        if(!findnota) throw new HttpException(404, 'nota not found')
         return findnota
     }

     // localhost:3000/api/nota/?title=dam
     static async getAll(){
            return await prisma.nota.findMany()
     }

     static async create(nota: Nota){
        return await prisma.nota.create({
            data: {
                ...nota
            } 
        })
     }

     static async update(id: number, nota: Nota){
        const findnota = await prisma.nota.findUnique({where:{id}})
        if(!findnota) throw new HttpException(404, 'Nota doesnt exists')
        return await prisma.nota.update({
            where: {id},
            data: {
                ...nota,
            } 
        })
     }

     static async delete(id: number) {
        try {
            return await prisma.nota.delete({ where: { id } });
        } catch (error) {
            throw new HttpException(404, "nota not found");
        }
    }
}
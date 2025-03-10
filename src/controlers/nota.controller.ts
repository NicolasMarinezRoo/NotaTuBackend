import { HttpException } from "../exceptions/HttpException2";
import { notaService } from "../services/nota.service";
import {Response, Request, NextFunction} from 'express'

export class notaController{
    static async getById(req:Request, res:Response, next:NextFunction){
        try{
            const id = Number.parseInt(req.params.id)
            if (isNaN(id)) throw new HttpException(400, "Invalid nota ID");

            // pasar a entero
            const nota = await notaService.getById(id)
            res.status(200).json(nota)
        }catch(error){
            next(error)
        }
    }

    static async getAll(req:Request, res:Response, next: NextFunction){
        try{
            //localhost:3000/nota?title=XXXXXX
            const user = await notaService.getAll()
            res.status(200).json(user)
        }catch(error){
            next(error)
        }
    }

    static async create(req:Request, res:Response, next: NextFunction){
        try{
            const notaData = req.body

            const newnota = await notaService.create(notaData)
            res.status(200).json(newnota)
        }catch(error){
            next(error)
        }
    }
    static async update(req:Request, res:Response, next: NextFunction){
        try{
            const notaData = req.body
            const id = Number.parseInt(req.params.id)
            if (isNaN(id)) throw new HttpException(400, "Invalid nota ID");

            const updatednota = await notaService.update(id, notaData)
            res.status(200).json(updatednota)
        }catch(error){
            next(error)
        }
    }

    static async delete(req:Request, res:Response, next: NextFunction){
        try{
            const id = Number.parseInt(req.params.id)
            if (isNaN(id)) throw new HttpException(400, "Invalid nota ID");

            const deletednota = await notaService.delete(id)
            res.status(200).json(deletednota)
        }catch(error){
            next(error)
        }
    }
}

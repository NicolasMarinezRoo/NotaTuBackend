import { Response, Request, NextFunction } from 'express';
import { HttpException } from "../exceptions/HttpException2";
import { AuthService } from "../services/auth.service";

export class AuthController {
    static async register(req: Request, res: Response, next: NextFunction) {
        try {
            const userData = req.body
            const newUser = await AuthService.register(userData)
            res.status(201).json({ message: 'User register successfully', newUser })
        } catch (error) {
           next(error)
        }
    }
    static async login(req: Request, res: Response, next: NextFunction) {
        try {
            const userData = req.body
            // Validar el body
            const token = await AuthService.login(userData.email, userData.password)
            res.cookie('token', token, { 
                maxAge: 60 * 60 * 1000,  //1 hora de caducidad
                httpOnly: true,  //No se puede acceder mediante js
                secure: true,  //Solo funciona en https
                sameSite: 'none' //Solo se envia si es una peticion del mismo sitio
            })
            res.status(201).json({ message: 'Login successfully: ', token })
        } catch (error: HttpException | any) {
            next(error)
        }
    }
}


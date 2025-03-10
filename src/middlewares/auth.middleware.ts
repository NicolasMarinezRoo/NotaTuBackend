import { Response, Request, NextFunction } from 'express';
import jwt from "jsonwebtoken";
import { CustomJwtPayload } from '../utils/CustomJwtPayload';
const token_password = process.env.TOKEN_PASSWORD || 'pass'

export function isAuthenticate(req: Request, res: Response, next: NextFunction):any {

    //const token = req.headers.authorization?.split(' ')[1]
    const token = req.cookies.token
    if (!token) return res.status(401).json({ message: "Access denied" })

    try {
        const tokenDecodificado = jwt.verify(token, token_password)
        req.body.user = tokenDecodificado as CustomJwtPayload    
        next()
    } catch (error) {
        res.status(403).json({ message: "Invalid token" })
    }
}

export function isAdmin(req: Request, res: Response, next: NextFunction):any {
    const {role} = req.body.user
    try {
        if(role != 'admin') res.status(403).json({ message: "Acces denied" })
        next()
    } catch (error) {
        res.status(403).json({ message: "Invalid token" })
    }
}

import { Router } from "express";
import {AuthController} from '../controlers/auth.controller';
import { loginValidation, registerValidation } from "../middlewares/validators.middleware";
import { validationMiddleware} from "../middlewares/validation.middleware";

const router = Router()

router.post('/login', loginValidation ,AuthController.login)
//router.post('/logout', AuthController.logout)
router.post('/register',registerValidation, validationMiddleware,AuthController.register)


export default router
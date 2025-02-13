import { Router } from "express";
import {UserController} from '../controlers/user.controller';
import {isAdmin, isAuthenticate} from '../middlewares/auth.middleware';

const router = Router()


router.get('/profile', isAuthenticate, UserController.profile)
router.get('/', isAuthenticate, isAdmin, UserController.getAll)


export default router
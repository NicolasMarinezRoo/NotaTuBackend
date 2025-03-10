import { notaController } from "@/controlers/nota.controller";
import { Router } from "express";

const router = Router()

//API REST FULL


//GET Listar todas las ofertas localhost:3000/api/offers/?title=react&category=dam
router.get('/', notaController.getAll)
//localhost:3000/api/offers/xxxx
router.get('/:id', notaController.getById)
//POST añadir una oferta nueva localhost:3000/api/notas/  {body}
router.post('/', notaController.create)
//DELETE Borrar una oferta localhost:3000/api/notas/XXXX  
router.delete('/:id', notaController.delete)
//PUT modificar una oferta localhost:3000/api/notas/XXXX  {body}
router.put('/:id', notaController.update)   



export default router
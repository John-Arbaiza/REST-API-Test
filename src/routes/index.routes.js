//importamos el modulo route de express
import { Router } from 'express'

//importamos la conexion
import {ping}from '../controllers/index.controller.js'

//Definimos un enroutador
const router = Router();

router.get('/ping', ping);

 export default router;
//importamos el modulo route de express
import { Router } from 'express'
import { getEmpleados, createEmpleados, upadateEmpleados, deleteEmpleados, getEmpleado} from '../controllers/empleados.controller.js';

//Definimos un enroutador
const router = Router();

router.get('/employees', getEmpleados);
router.get('/employees/:id', getEmpleado);
router.post('/employees',createEmpleados );
router.patch('/employees/:id', upadateEmpleados);
router.delete('/employees/:id',deleteEmpleados);

export default router;
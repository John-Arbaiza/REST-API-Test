//Importmos express
import express from "express";
//importamos las rutas
import empleadosRoute from './routes/empleado.routes.js';
import indexRoutes from './routes/index.routes.js';

//Ejecutamos express
const app =  express();

//empleamos el metodo json de express
app.use(express.json());


//URL
app.use('/api/',empleadosRoute);
app.use(indexRoutes);

app.use((req, res, next) =>{
    res.status(404).json({
        message:'Endpoint Not Found'
    })
})

export default app;
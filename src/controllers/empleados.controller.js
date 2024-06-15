import {pool}from '../db.js'

//controladores 
//para mostrar los datos
export const getEmpleados = async(req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM empleados')
        res.json(rows)
    } catch (error) {
        res.status(500).json({
            message: 'Algo salio mal'
        })
    }
};

//Para mostrar solo 1 empleado
export const getEmpleado = async (req, res) =>{
    try {
        const [rows] = await pool.query('SELECT * FROM empleados WHERE id = ?', [req.params.id])
        //console.log(req.params.id);
        if(rows.length <= 0) return res.status(404).json({
            message: 'Employee not found'
        })
        res.json(rows[0])
    } catch (error) {
        res.status(500).json({
            message: 'Algo salio mal'
        })
    }
}

//Para crear nuevos empleados
export const createEmpleados = async (req, res) => {
        //requerimos el nombre y el salario
        const {name, salary} = req.body;
    try {
        const [rows] = await pool.query('INSERT INTO empleados (name,salaio) VALUES (?,?)',[name,salary])
        // console.log(req.body);
        res.send({
            id: rows.insertId,
            name,
            salary,
        })
        
    } catch (error) {
        res.status(500).json({
            message: 'Algo salio mal'
        })
    }
};

//Para actualizar datos
export const upadateEmpleados = async (req, res) => {
    const {id} = req.params;
    const {name, salary} = req.body;
    try {
        const [results] = await pool.query('UPDATE empleados SET name= IFNULL(?, name) , salaio= IFNULL(?, salaio) WHERE id =? ',[name,salary,id]);
        console.log(results);
        if(results.affectedRows === 0 ) return res.status(404).json({
            message: 'Employee not found'
        })
    
        const [rows] = await pool.query('SELECT * FROM empleados WHERE id = ?', [id]);
    
        res.json(rows[0])
    
        // console.log(id);  
    } catch (error) {
        res.status(500).json({
            message: 'Algo salio mal'
        })
    }

};

//Para eliminar empleados
export const deleteEmpleados = async (req, res) => {

    try {
        const [ results] = await pool.query('DELETE FROM empleados  WHERE id = ?', [req.params.id]);
    
        if(results.affectedRows <= 0)return res.status(404).json({
            message: 'Employee not found'
        })
        
        console.log(results);
        res.sendStatus(204);
        
        
    } catch (error) {
        res.status(500).json({
            message: 'Algo salio mal'
        })
    }
};
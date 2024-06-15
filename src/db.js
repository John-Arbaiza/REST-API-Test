//importaamos el modulo de mysql2
import {createPool} from 'mysql2/promise' //createPool srive como un conjunto de conexiones que se pueden reutilizar
import {
    DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_DATABASE
} from './Config.js'

//creamos la conexion y la almacenamos en una constante
export const pool = createPool({
    //indicamos donde esta la db con las respectiva configuraciones 
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
});

// console.log(DB_HOST);
// console.log(DB_USER);
// console.log(DB_PASSWORD);
// console.log(DB_PORT);
// console.log(DB_DATABASE);
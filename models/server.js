const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.usuarios = '/api/usuarios';

        //Conectar a base de datos
        this.conectarDB();

        //Midelwares = funcion que se ejecuta con el servidor
        this.middlewares();

        // rutas de mi aplicacion
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }

    middlewares() {
        //cors
        this.app.use(cors());

        // Parseo y lectura del body
        this.app.use(express.json());

        //directorio publico
        this.app.use(express.static('public'));
    }
    //rutas
    routes() {
        //el get es para solicitar
        this.app.use('/api/usuarios', require('../routes/usuarios'))
    }
    //donde lo llama
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}

module.exports = Server;

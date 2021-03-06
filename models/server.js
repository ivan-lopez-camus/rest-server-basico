const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // Conectar a base de datos
        this.conectarDB();

        //Middlewares, funcion que se ejecuta cuando se levanta el servidor
        this.middlewares();

        //Rutas de la aplicacion

        this.routes();

    }

    async conectarDB() {
        await dbConnection();
    }

    middlewares(){
        //cors
        this.app.use( cors() );

        //lectura y parseo del body
        this.app.use(express.json());
        
        //Directorio publico
        this.app.use( express.static( 'public'));
    }

    routes(){

        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listen(){
         
        this.app.listen( this.port , ()=>{
            console.log('Puerto corriendo en el puerto', this.port);
        });
    }

}

module.exports = Server;
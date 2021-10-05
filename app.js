//SE CREA EL ARCHIVO .ENV PARA DEFINIR LAS VARIABLES DE ENTORNO, PRIMERO SE HACE NPM DOTENV
require('dotenv').config();

const Server = require('./models/server');
//CREA EL WEB SERVER LUEGO DE HACER NPM INSTALL EXPRESS, se volvio una clase en server.js
//El link del codigo para crear el server que ahora esta en la carpeta server.js, https://www.npmjs.com/package/express

const server = new Server();
server.listen();
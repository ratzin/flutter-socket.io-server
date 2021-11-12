
const express = require('express');
const path = require('path');
require('dotenv').config(); 

//app de express
const app = express();

//node server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');

// Path publico
const pathPublico = path.resolve( __dirname, 'public' );

app.use( express.static( pathPublico ));

server.listen( process.env.PORT, (err) => {
    if ( err ) throw new Error(err);

    console.log('Servidor corriendo en puerto', process.env.PORT);
});

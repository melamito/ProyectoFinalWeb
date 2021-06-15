"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyparser = require('body-parser');
var express = require('express');
var app = express();
var cors = require('cors');
var mysql = require('mysql');
app.use(bodyparser.urlencoded({
    extended: false
}));
app.use(cors());
var config = {
    server: "127.0.0.1",
    port: 3000
};
//Configuracion de la conexion
var conexionMysql = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '',
    database: 'crown_db'
});
conexionMysql.connect(function (err) {
    if (err) {
        console.log('Error de conexionr => ', err);
        return;
    }
    console.log('Conexion exitosa a MySQL');
});
app.listen(config, function () {
    console.log("App listening at http://" + config.server + ":" + config.port);
});
/*
    metodos CRUD=
    Create -> crear un dato, e insertarlo en la BD -> post
    Read -> Leer o seleccionar datos -> get
    Update -> actualizar datos -> put
    Delete -> borrar datos -> delete
*/
//todos los productos
app.get('/productos', function (req, res) {
    conexionMysql.query("select * from productos", function (req1, res1) {
        console.log(res1);
        res.status(200).send(res1);
    });
});
//ub producto especifico
app.get('/productos/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    conexionMysql.query("select * from productos where id=?", id, function (req1, res1) {
        console.log(res1);
        res.status(200).send(res1);
    });
});

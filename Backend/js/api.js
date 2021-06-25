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
        console.log("Todos los productos enviados de la BD");
        res.status(200).send(res1);
    });
});
//un producto especifico
app.get('/productos/:id', function (req, res) {
    var id = req.params.id;
    console.log("id del producto buscado: ", id);
    conexionMysql.query("select * from productos where id=?", id, function (req1, res1) {
        console.log("Producto con id ", id, " encontrado y enviado");
        res.status(200).send(res1);
    });
});
app.get('/region', function (req, res) {
    conexionMysql.query("select * from regiones", function (req1, res1) {
        console.log("regiones enviadas");
        res.status(200).send(res1);
    });
});
app.get('/provincia/:id', function (req, res) {
    var id = req.params.id;
    conexionMysql.query("select * from provincias where region_id=?", id, function (req1, res1) {
        console.log("provincias enviadas");
        res.status(200).send(res1);
    });
});
app.get('/comuna/:id', function (req, res) {
    var id = req.params.id;
    conexionMysql.query("select * from comunas where provincia_id=?", id, function (req1, res1) {
        console.log("comunas enviadas");
        res.status(200).send(res1);
    });
});
//app.use(bodyparser.json())
app.post('/crearusuario', bodyparser.json(), function (req, res) {
    var nombres = req.body.nombres;
    var apellidos = req.body.apellidos;
    var rut = req.body.rut;
    var direccion = req.body.direccion;
    var region = req.body.region;
    var provincia = req.body.provincia;
    var comuna = req.body.comuna;
    var correo = req.body.correo;
    var contraseña = req.body.contraseña;
    conexionMysql.query("INSERT INTO usuarios(nombres,apellidos,rut,direccion,region,provincia,comuna,correo,contraseña)VALUES('" + nombres + "','" + apellidos + "','" + rut + "','" + direccion + "','" + region + "','" + provincia + "','" + comuna + "','" + correo + "','" + contraseña + "')", function (req1, res1) {
        res.status(201).send(JSON.stringify("Usuario " + nombres + " creado con el id: " + res1.insertId));
    });
});
/*
    Debo recordar hacer tsc --watch para que se vaya generando mi archivo js
    y ejecutar node js/api.js para ejecutar el coso este
    */ 

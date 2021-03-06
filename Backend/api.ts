import { createConnection } from "net";

    const bodyparser = require('body-parser');
    const express = require('express');
    const app = express();
    const cors = require('cors');
    const mysql = require('mysql');

    app.use(bodyparser.urlencoded({
        extended:false
    }))

    app.use(cors())
 
    const config={
        server: "127.0.0.1",
        port: 3000
    }

    //Configuracion de la conexion
    const conexionMysql=mysql.createConnection({
        host: 'localhost',
        user: 'usuariocrown',
        port: 3306,
        password: '@GKMcmr135#',
        database: 'crown_db'
    })

    conexionMysql.connect( function(err : any){
        if(err){
            console.log('Error de conexionr => ', err)
            return
        }
        console.log('Conexion exitosa a MySQL')
    })



    app.listen(config, () => {
        console.log(`App listening at http://${config.server}:${config.port}`)
    })

    /*
        metodos CRUD= 
        Create -> crear un dato, e insertarlo en la BD -> post
        Read -> Leer o seleccionar datos -> get
        Update -> actualizar datos -> put
        Delete -> borrar datos -> delete
    */
    //todos los productos
    app.get('/productos',(req:any,res:any)=>{
        conexionMysql.query("select * from productos",(req1:any,res1:any)=>{
            console.log("Todos los productos enviados de la BD");
            res.status(200).send(res1);
        })
    });

    //un producto especifico
    app.get('/productos/:id',(req:any,res:any)=>{
        let id= req.params.id;
        console.log("id del producto buscado: ",id);
        conexionMysql.query("select * from productos where id=?",id,(req1:any,res1:any)=>{
            console.log("Producto con id ",id," encontrado y enviado");
            res.status(200).send(res1);
        });
    });

    app.get('/region',(req:any,res:any)=>{
        conexionMysql.query("select * from regiones",(req1:any,res1:any)=>{
            console.log("regiones enviadas");
            res.status(200).send(res1);
        });
    });

    app.get('/provincia/:id',(req:any,res:any)=>{
        let id=req.params.id;
        conexionMysql.query("select * from provincias where region_id=?",id,(req1:any,res1:any)=>{
            console.log("provincias enviadas");
            res.status(200).send(res1);
        });
    });

    app.get('/comuna/:id',(req:any,res:any)=>{
        let id=req.params.id;
        conexionMysql.query("select * from comunas where provincia_id=?",id,(req1:any,res1:any)=>{
            console.log("comunas enviadas");
            res.status(200).send(res1);
        });
    });

    app.get('/buscarusuarios',(req:any,res:any)=>{
        conexionMysql.query("select * from usuarios",(req1:any,res1:any)=>{
            console.log(res1)
            res.status(200).send(res1);
        });
    });

    app.get('/buscarusuarios/:id',(req:any,res:any)=>{
        let id=req.params.id;
        conexionMysql.query("select * from usuarios where id=?",id,(req1:any,res1:any)=>{
            console.log(res1);
            console.log("res1.nombres")
            res.status(200).send(res1);
        });
    });

    app.get('/login',(req:any,res:any)=>{
        let correo=req.query.correo;
        let clave=req.query.clave;
        console.log(correo)
        conexionMysql.query(`SELECT * FROM usuarios where correo=${correo} and contrase??a=md5(${clave})`,function(error:any,resultados:any,fields:any){
            console.log(resultados)

            if(error){
                throw(error)
            }else{
                res.status(200).send(resultados)
            }
        })
    })

    //app.use(bodyparser.json())

    app.post('/crearusuario',bodyparser.json(),(req:any,res:any)=>{
        let nombres=req.body.nombres
        let apellidos=req.body.apellidos
        let rut=req.body.rut
        let direccion=req.body.direccion
        let region=req.body.region
        let provincia=req.body.provincia
        let comuna=req.body.comuna
        let correo=req.body.correo
        let contrase??a=req.body.contrase??a
        let admi=0
        

        conexionMysql.query("INSERT INTO usuarios(nombres,apellidos,rut,direccion,region,provincia,comuna,correo,contrase??a,admi)VALUES('"+nombres+"','"+apellidos+"','"+rut+"','"+direccion+"','"+region+"','"+provincia+"','"+comuna+"','"+correo+"',md5('"+contrase??a+"'),'"+admi+"')",(req1:any,res1:any)=>{
            res.status(201).send(JSON.stringify(`Usuario ${nombres} creado con el id: ${res1.insertId}`));
            console.log("res1",res1)

            
        });
        
    });

    app.post("/crearcarro",bodyparser.json(),(req:any,res:any)=>{
        let id=req.body.id
        let num=0
        conexionMysql.query("INSERT INTO carrito(precio_total,id_usuario)VALUES('"+num+"','"+id+"')",(req1:any,res1:any)=>{
            res.status(201).send(JSON.stringify(`Carrito creadocon id ${res1.insertId}`))
        });
    });

    app.post("/agregarcarrito",bodyparser.json(),(req:any,res:any)=>{

    })
/*
    Debo recordar hacer tsc --watch para que se vaya generando mi archivo js
    y ejecutar node js/api.js para ejecutar el coso este
    */
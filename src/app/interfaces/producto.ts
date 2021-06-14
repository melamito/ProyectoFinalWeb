export interface Producto {
    id:number;
    nombre:string;
    cantidad:number;
    precio:number;
    imagen:string;
    sexo:number;
    categoria:number;
    puntuacion:number;
    oferta: number;
}

/*
    Sexo:
        1 = mujer
        2 = hombre
        3 = niñe

    Categoria_
        11 = Poleras
        12 = Polerones
        13 = Pantalones
        14 = Zapatos
*/

export const ListaProductos:Array<Producto>=
[
    {
        id:1,
        nombre:"Sweater Cable Mock",
        cantidad:5,
        precio:108000,
        imagen:"../../assets/productos/1.png",
        sexo: 1,
        categoria:12,
        puntuacion:3,
        oferta:0
    },
    {
        id:2,
        nombre:"Camisa Oxford Logo",
        cantidad:3,
        precio:48000,
        imagen:"../../assets/productos/2.png",
        sexo: 2,
        categoria:11,
        puntuacion:2,
        oferta:0
    },
    {
        id:3,
        nombre:"Pantalon Ryan Glenplaid",
        cantidad:6,
        precio:88000,
        imagen:"../../assets/productos/3.png",
        sexo: 1,
        categoria:13,
        puntuacion:5,
        oferta: 15
    },
    {
        id:4,
        nombre:"Polera Lace Jr. Bebé Uva",
        cantidad:0,
        precio:19990,
        imagen:"../../assets/productos/4.png",
        sexo: 3,
        categoria:11,
        puntuacion:1,
        oferta: 0
    },
    {
        id:5,
        nombre:"Bota Comfy Recién Nacida Beige",
        cantidad:1,
        precio:11990,
        imagen:"../../assets/productos/5.png",
        sexo: 3,
        categoria:14,
        puntuacion:3,
        oferta:0
    },
    {
        id:6,
        nombre:"Pantalon Hombre Slim Non Iron Stretch",
        cantidad:1,
        precio:84000,
        imagen:"../../assets/productos/6.png",
        sexo:2,
        categoria:13,
        puntuacion:4,
        oferta:63000
    },
    {
        id:7,
        nombre:"Polera Mujer Sandwash",
        cantidad:10,
        precio:44000,
        imagen:"../../assets/productos/7.png",
        sexo:1,
        categoria:11,
        puntuacion:5,
        oferta:0
    },
    {
        id:8,
        nombre:"Botín piel negro Bimba y lola",
        cantidad:10,
        precio:204000,
        imagen:"../../assets/productos/8.png",
        sexo:1,
        categoria:14,
        puntuacion:5,
        oferta:163200
    },
    {
        id:9,
        nombre:"Sweater Hombre Merino Crew",
        cantidad:10,
        precio:78000,
        imagen:"../../assets/productos/9.png",
        sexo:2,
        categoria:12,
        puntuacion:5,
        oferta:58500
    }

];
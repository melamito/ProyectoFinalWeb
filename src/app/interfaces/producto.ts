export interface Producto {
    id:number;
    nombre:string;
    cantidad:number;
    precio:number;
    imagen:string;
    sexo:number;
    categoria:number;
    puntuacion:number;
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
        puntuacion:3
    },
    {
        id:2,
        nombre:"Camisa Oxford Logo",
        cantidad:3,
        precio:48000,
        imagen:"../../assets/productos/2.png",
        sexo: 2,
        categoria:11,
        puntuacion:2
    },
    {
        id:3,
        nombre:"Pantalon Ryan Glenplaid",
        cantidad:6,
        precio:88000,
        imagen:"../../assets/productos/3.png",
        sexo: 1,
        categoria:13,
        puntuacion:5
    },
    {
        id:4,
        nombre:"Polera Lace Jr. Bebé Uva",
        cantidad:0,
        precio:19990,
        imagen:"../../assets/productos/4.png",
        sexo: 3,
        categoria:11,
        puntuacion:1
    },
    {
        id:5,
        nombre:"Bota Comfy Recién Nacida Beige",
        cantidad:1,
        precio:11990,
        imagen:"../../assets/productos/5.png",
        sexo: 3,
        categoria:14,
        puntuacion:3
    }

];
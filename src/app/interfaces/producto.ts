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

    Imagenes:
        855 * 855 px
*/

export const NULO:Producto={
    id:0,
    nombre:"null",
    cantidad:0,
    precio:0,
    imagen:"../../assets/productos/0.jpg",
    sexo:0,
    categoria:0,
    puntuacion:0,
    oferta: 0
}


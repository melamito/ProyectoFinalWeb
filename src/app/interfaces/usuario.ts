export interface Usuario {
    id:number,
    nombres:string,
    apellidos:string,
    rut:string,
    direccion:string,
    region:number,
    provincia:number,
    comuna:number,
    correo:string,
    contraseña:string,
    admi:number
}

export const NULO:Usuario={
    id:0,
    nombres:"",
    apellidos:"",
    rut:"",
    direccion:"",
    region:0,
    provincia:0,
    comuna:0,
    correo:"",
    contraseña:"",
    admi:0
}
import { generarIdUnico } from './utils';  

export class Veterinaria {  
    public id: number;  
    public nombre: string;  
    public direccion: string;  

    constructor(nombre: string, direccion: string) {  
        this.id = generarIdUnico();  
        this.nombre = nombre;  
        this.direccion = direccion;  
    }  
}
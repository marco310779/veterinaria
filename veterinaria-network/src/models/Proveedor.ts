import { generarIdUnico } from './utils';  

export class Proveedor {  
    public id: number;  
    public nombre: string;  
    public telefono: string;  

    constructor(nombre: string, telefono: string) {  
        this.id = generarIdUnico();  
        this.nombre = nombre;  
        this.telefono = telefono;  
    }  
}
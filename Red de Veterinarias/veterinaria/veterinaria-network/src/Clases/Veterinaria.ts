import { generarIdUnico } from "./Validacion";  

export class Veterinaria {  
    public id: number;  
    public nombre: string;  
    public direccion: string; 

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getDireccion(): string {
        return this.direccion;
    }

    public setDireccion(direccion: string): void {
        this.direccion = direccion;
    }
 

    constructor(nombre: string, direccion: string) {  
        this.id = generarIdUnico();  
        this.nombre = nombre;  
        this.direccion = direccion;  
    }  
}
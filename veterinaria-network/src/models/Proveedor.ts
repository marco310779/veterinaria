import { generarIdUnico } from "./Validacion";  

export class Proveedor {  
    public id: number;  
    public nombre: string;  
    public telefono: number;  

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

    public getTelefono(): number {
        return this.telefono;
    }

    public setTelefono(telefono: number): void {
        this.telefono = telefono;
    }


    constructor(nombre: string, telefono: number) {  
        this.id = generarIdUnico();  
        this.nombre = nombre;  
        this.telefono = telefono;  
    }  
}
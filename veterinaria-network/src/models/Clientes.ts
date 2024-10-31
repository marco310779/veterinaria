import { generarIdUnico } from './utils';  

export class Cliente {  
    public id: number;  
    public nombre: string;  
    public telefono: string;  
    public esVIP: boolean;  
    public numeroVisitas: number;  

    constructor(nombre: string, telefono: string) {  
        this.id = generarIdUnico();  
        this.nombre = nombre;  
        this.telefono = telefono;  
        this.esVIP = false;  
        this.numeroVisitas = 0;  
    }  

    public incrementarVisitas(): void {  
        this.numeroVisitas++;  
        if (this.numeroVisitas >= 5) {  
            this.esVIP = true;  
        }  
    }  
}
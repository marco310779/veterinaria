import { generarIdUnico } from "./Validacion";  

export class Cliente {  
    public id: number;  
    public nombre: string;  
    public telefono: number;  
    public esVIP: boolean;  
    public numeroVisitas: number;  
    

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

    public isEsVIP(): boolean {
        return this.esVIP;
    }

    public setEsVIP(esVIP: boolean): void {
        this.esVIP = esVIP;
    }

    public getNumeroVisitas(): number {
        return this.numeroVisitas;
    }

    public setNumeroVisitas(numeroVisitas: number): void {
        this.numeroVisitas = numeroVisitas;
    }

   



    constructor(nombre: string, telefono: number) {  
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
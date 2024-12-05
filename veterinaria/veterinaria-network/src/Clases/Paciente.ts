import { generarIdUnico } from "./Validacion";  

export class Paciente {  
    public id: number;  
    public nombre: string;  
    public especie: string;  
    public idDuenio: number;  

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

    public getEspecie(): string {
        return this.especie;
    }

    public setEspecie(especie: string): void {
        this.especie = especie;
    }

    public getIdDuenio(): number {
        return this.idDuenio;
    }

    public setIdDuenio(idDuenio: number): void {
        this.idDuenio = idDuenio;
    }


    constructor(nombre: string, especie: string, idDuenio: number) {  
        this.id = generarIdUnico();  
        this.nombre = nombre;  
        this.especie = especie === 'perro' || especie === 'gato' ? especie : 'exótica';  
        this.idDuenio = idDuenio;  
    }  
}
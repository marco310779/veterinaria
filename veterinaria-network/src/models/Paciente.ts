import { generarIdUnico } from './utils';  

export class Paciente {  
    public id: number;  
    public nombre: string;  
    public especie: string;  
    public idDuenio: number;  

    constructor(nombre: string, especie: string, idDuenio: number) {  
        this.id = generarIdUnico();  
        this.nombre = nombre;  
        this.especie = especie === 'perro' || especie === 'gato' ? especie : 'exótica';  
        this.idDuenio = idDuenio;  
    }  
}
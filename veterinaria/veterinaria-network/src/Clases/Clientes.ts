import { generarIdUnico } from "./Validacion";  

// Cliente.ts
export class Cliente {
    convertirVIP() {
        throw new Error("Method not implemented.");
    }
    private id: number;
    public nombre: string;
    private telefono: number;
    private visitas: number;  // contador de visitas
    private esVIP: boolean;  // estado VIP

    constructor(nombre: string, telefono: number) {
        this.id = Math.floor(Math.random() * 1000);  // asignar ID aleatorio
        this.nombre = nombre;
        this.telefono = telefono;
        this.visitas = 0;
        this.esVIP = false;
    }

    public registrarVisita(): void {
        this.visitas++;
        console.log(`Visita registrada. Total de visitas: ${this.visitas}`);
        if (this.visitas >= 5 && !this.esVIP) {
            this.esVIP = true;
            console.log(`${this.nombre} ahora es \x1b[32m cliente VIP \x1b[0m.`);
        }
    }

    // Getters y setters
    public getId(): number {
        return this.id;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public setTelefono(telefono: number): void {
        this.telefono = telefono;
    }

    public getVisitas(): number {
        return this.visitas;
    }

    public esClienteVIP(): boolean {
        return this.esVIP;
    }
}

import { Veterinaria } from '../models/Veterinaria';  
import { Cliente } from "../models/Clientes";  
import { Paciente } from '../models/Paciente';  
import { Proveedor } from '../models/Proveedor';  

export class RedVeterinarias {  
    private veterinarias: Veterinaria[] = [];  
    private clientes: Cliente[] = [];  
    private pacientes: Paciente[] = [];  
    private proveedores: Proveedor[] = [];  

    // Métodos para Veterinarias  
    public altaVeterinaria(nombre: string, direccion: string): void {  
        const veterinaria = new Veterinaria(nombre, direccion);  
        this.veterinarias.push(veterinaria);  
    }  

    public modificarVeterinaria(id: number, nombre: string, direccion: string): boolean {  
        const veterinaria = this.veterinarias.find(v => v.id === id);  
        if (veterinaria) {  
            veterinaria.nombre = nombre;  
            veterinaria.direccion = direccion;  
            return true;  
        }  
        return false;  
    }  

    public bajaVeterinaria(id: number): boolean {  
        const index = this.veterinarias.findIndex(v => v.id === id);  
        if (index !== -1) {  
            this.veterinarias.splice(index, 1);  
            return true;  
        }  
        return false;  
    }  

   

    // Métodos para Clientes  
    public altaCliente(nombre: string, telefono: number): void {  
        const cliente = new Cliente(nombre, telefono);  
        this.clientes.push(cliente);  
    }  

    public modificarCliente(id: number, nombre: string, telefono: number): boolean {  
        const cliente = this.clientes.find(c => c.id === id);  
        if (cliente) {  
            cliente.nombre = nombre;  
            cliente.telefono = telefono;  
            return true;  
        }  
        return false;  
    }  

    public bajaCliente(id: number): boolean {  
        const index = this.clientes.findIndex(c => c.id === id);  
        if (index !== -1) {  
            this.clientes.splice(index, 1);  
            return true;  
        }  
        return false;  
    }  

    // Métodos para Pacientes  
    public altaPaciente(nombre: string, especie: string, idDuenio: number): void {  
        const paciente = new Paciente(nombre, especie, idDuenio);  
        this.pacientes.push(paciente);  
    }  

    public modificarPaciente(id: number, nombre: string, especie: string): boolean {  
        const paciente = this.pacientes.find(p => p.id === id);  
        if (paciente) {  
            paciente.nombre = nombre;  
            paciente.especie = especie === 'perro' || especie === 'gato' ? especie : 'exótica';  
            return true;  
        }  
        return false;  
    }  

    public bajaPaciente(id: number): boolean {  
        const index = this.pacientes.findIndex(p => p.id === id);  
        if (index !== -1) {  
            this.pacientes.splice(index, 1);  
            return true;  
        }  
        return false;  
    }  

    // Métodos para Proveedores  
    public altaProveedor(nombre: string, telefono: number): void {  
        const proveedor = new Proveedor(nombre, telefono);  
        this.proveedores.push(proveedor);  
    }  

    public modificarProveedor(id: number, nombre: string, telefono: number): boolean {  
        const proveedor = this.proveedores.find(p => p.id === id);  
        if (proveedor) {  
            proveedor.nombre = nombre;  
            proveedor.telefono = telefono;  
            return true;  
        }  
        return false;  
    }  

    public bajaProveedor(id: number): boolean {  
        const index = this.proveedores.findIndex(p => p.id === id);  
        if (index !== -1) {  
            this.proveedores.splice(index, 1);  
            return true;  
        }  
        return false;  
    }  
}
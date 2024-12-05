import * as rls from "readline-sync";
import { Cliente } from "../Clases/Clientes";
import { Proveedor } from "../Clases/Proveedor";
import { Paciente } from "../Clases/Paciente";
import { Veterinaria } from "../Clases/Veterinaria";

export class RedVeterinarias {
    private veterinarias: Veterinaria[] = [];
    private clientes: Cliente[] = [];
    private proveedores: Proveedor[] = [];
    private pacientes: Paciente[] = [];

    private veterinariasAltas: Veterinaria[] = [];
    private veterinariasModificadas: Veterinaria[] = [];
    private veterinariasBajas: Veterinaria[] = [];

    private clientesAltos: Cliente[] = [];
    private clientesModificados: Cliente[] = [];
    private clientesBajos: Cliente[] = [];

    private proveedoresAltos: Proveedor[] = [];
    private proveedoresModificados: Proveedor[] = [];
    private proveedoresBajos: Proveedor[] = [];

    private pacientesAltos: Paciente[] = [];
    private pacientesModificados: Paciente[] = [];
    private pacientesBajos: Paciente[] = [];

    // Metodos para Veterinarias
    public altaVeterinaria(nombre: string, direccion: string): void {
        const veterinaria = new Veterinaria(nombre, direccion);
        this.veterinarias.push(veterinaria);
        this.veterinariasAltas.push(veterinaria);
        console.log("Veterinaria agregada con exito:");
        console.table(veterinaria);
    }
    
    public modificarVeterinaria(id: number, nombre: string, direccion: string): boolean {
        const veterinaria = this.veterinarias.find(v => v.getId() === id);
        if (veterinaria) {
            veterinaria.setNombre(nombre);
            veterinaria.setDireccion(direccion);
            this.veterinariasModificadas.push(veterinaria);
            console.log("Veterinaria modificada con exito:");
            console.log(veterinaria);
            return true;
        }
        console.log("Veterinaria no encontrada.");
        return false;
    }

    public bajaVeterinaria(id: number): boolean {
        const index = this.veterinarias.findIndex(v => v.getId() === id);
        if (index !== -1) {
            const veterinariaEliminada = this.veterinarias.splice(index, 1)[0];
            this.veterinariasBajas.push(veterinariaEliminada);
            console.log("Veterinaria eliminada con exito:");
            console.log(veterinariaEliminada);
            return true;
        }
        console.log("Veterinaria no encontrada.");
        return false;
    }

    // Metodos para Clientes
    public altaCliente(nombre: string, telefono: number): void {
        const cliente = new Cliente(nombre, telefono);
        this.clientes.push(cliente);
        this.clientesAltos.push(cliente);
        console.log("Cliente agregado con exito:");
        console.table(cliente);
    }
    public getClientes(): Cliente[] {
        return this.clientes;
    }
    
    public getPacientes(): Paciente[] {
        return this.pacientes;
    }

    public getVeterinarias(): Veterinaria[] {
        return this.veterinarias;
    }
    
    public getProvedor(): Proveedor[] {
        return this.proveedores;
    }

    public modificarCliente(id: number, nombre: string, telefono: number): boolean {
        const cliente = this.clientes.find(c => c.getId() === id);
        if (cliente) {
            cliente.setNombre(nombre);
            cliente.setTelefono(telefono);
            this.clientesModificados.push(cliente);
            console.log("Cliente modificado con exito:");
            console.log(cliente);
            return true;
        }
        console.log("Cliente no encontrado.");
        return false;
    }

    public bajaCliente(id: number): boolean {
        const index = this.clientes.findIndex(c => c.getId() === id);
        if (index !== -1) {
            const clienteEliminado = this.clientes.splice(index, 1)[0];
            this.clientesBajos.push(clienteEliminado);
            console.log("Cliente eliminado con exito:");
            console.log(clienteEliminado);
            return true;
        }
        console.log("Cliente no encontrado.");
        return false;
    }

    // Metodo para registrar visita de un cliente
    public registrarVisita(idCliente: number): void {
        const cliente = this.clientes.find(c => c.getId() === idCliente);
        if (cliente) {
            cliente.registrarVisita();  // Llamar al metodo de la clase Cliente
            console.log(`Visita registrada para el cliente ${cliente.getId()}.`);
            if (cliente.getVisitas() >= 5) {
                cliente.esClienteVIP();
                console.log(`El cliente ${cliente.getId()} ha sido convertido en VIP.`);
            }
        } else {
            console.log("Cliente no encontrado.");
        }
    }

    // Metodos para Proveedores
    public altaProveedor(nombre: string, telefono: number): void {
        const proveedor = new Proveedor(nombre, telefono);
        this.proveedores.push(proveedor);
        this.proveedoresAltos.push(proveedor);
        console.log("Proveedor agregado con exito:");
        console.table(proveedor);
    }

    public modificarProveedor(id: number, nombre: string, telefono: number): boolean {
        const proveedor = this.proveedores.find(p => p.getId() === id);
        if (proveedor) {
            proveedor.setNombre(nombre);
            proveedor.setTelefono(telefono);
            this.proveedoresModificados.push(proveedor);
            console.log("Proveedor modificado con exito:");
            console.log(proveedor);
            return true;
        }
        console.log("Proveedor no encontrado.");
        return false;
    }

    public bajaProveedor(id: number): boolean {
        const index = this.proveedores.findIndex(p => p.getId() === id);
        if (index !== -1) {
            const proveedorEliminado = this.proveedores.splice(index, 1)[0];
            this.proveedoresBajos.push(proveedorEliminado);
            console.log("Proveedor eliminado con exito:");
            console.log(proveedorEliminado);
            return true;
        }
        console.log("Proveedor no encontrado.");
        return false;
    }

    // Metodos para Pacientes
    public altaPaciente(nombre: string, especie: string, idDuenio: number): void {
        const paciente = new Paciente(nombre, especie, idDuenio);
        this.pacientes.push(paciente);
        this.pacientesAltos.push(paciente);
        console.log("Paciente agregado con exito:");
        console.table(paciente);
    }

    public modificarPaciente(id: number, nombre: string, especie: string, idDuenio: number): boolean {
        const paciente = this.pacientes.find(p => p.getId() === id);
        if (paciente) {
            paciente.setNombre(nombre);
            paciente.setEspecie(especie);
            paciente.setIdDuenio(idDuenio);
            this.pacientesModificados.push(paciente);
            console.log("Paciente modificado con exito:");
            console.log(paciente);
            return true;
        }
        console.log("Paciente no encontrado.");
        return false;
    }

    public bajaPaciente(id: number): boolean {
        const index = this.pacientes.findIndex(p => p.getId() === id);
        if (index !== -1) {
            const pacienteEliminado = this.pacientes.splice(index, 1)[0];
            this.pacientesBajos.push(pacienteEliminado);
            console.log("Paciente eliminado con exito:");
            console.log(pacienteEliminado);
            return true;
        }
        console.log("Paciente no encontrado.");
        return false;
    }
}

// Funcion para ejecutar el menu
const ejecutarMenu = () => {
    const redVeterinarias = new RedVeterinarias();
    let respuestaUsuario: number = 0;

    console.log("Bienvenidos a la Red de Veterinarias");

    do {
        respuestaUsuario = rls.questionInt(
            "Ingrese:\n1 para Veterinarias\n2 para Clientes\n3 para Pacientes\n4 para Proveedores \n5 para Salir\n"
        );

        if (respuestaUsuario === 6) {
            console.log("Saliendo...");
            break;
        }

        if (respuestaUsuario < 1 || respuestaUsuario > 6) {
            console.log("Por favor, ingrese un numero valido entre 1 y 6.");
        } else {
            manejarMenuSecundario(respuestaUsuario, redVeterinarias);
        }

    } while (respuestaUsuario !== 5);
};

// Funcion para manejar los submenus
const manejarMenuSecundario = (respuestaUsuario: number, redVeterinarias: RedVeterinarias) => {
    let opcion: number = 0;

    switch (respuestaUsuario) 
    {
        case 1: // Veterinarias
            do {
                opcion = rls.questionInt(
                    "1: Alta Veterinaria\n2: Modificar Veterinaria\n3: Baja Veterinaria \n4: Ver listado de Veterinarias \n5: Volver al menu principal\n"
                );
                switch (opcion) {
                    case 1:
                        const nombre = rls.question("Ingrese el nombre de la veterinaria: ");
                        const direccion = rls.question("Ingrese la direccion de la veterinaria: ");
                        redVeterinarias.altaVeterinaria(nombre, direccion);
                        break;
                    case 2:
                        let id = rls.questionInt("Ingrese el ID de la veterinaria a modificar: ");
                        const nuevoNombre = rls.question("Ingrese el nuevo nombre: ");
                        const nuevaDireccion = rls.question("Ingrese la nueva direccion: ");
                        redVeterinarias.modificarVeterinaria(id, nuevoNombre, nuevaDireccion);
                        break;
                    case 3:
                        id = rls.questionInt("Ingrese el ID de la veterinaria a eliminar: ");
                        redVeterinarias.bajaVeterinaria(id);
                        break;
                    case 4:
                        console.log("\x1b[32m"); // Cambiar color a verde
                        console.table(redVeterinarias.getVeterinarias());
                        console.log("\x1b[0m"); // Restablecer color
                        break;  
                        
                    case 5:
                        console.log("Volviendo al menu principal...");
                        break;
                    default:
                        console.log("Opcion no valida.");
                        break;
                }
            } while (opcion !== 4);
            break;

        case 2: // Clientes
            do {
                opcion = rls.questionInt(
                    "1: Alta Cliente\n2: Modificar Cliente\n3: Baja Cliente\n4: Registrar Visita \n5: Ver listado de Clientes \n6: Volver al menu principal\n"
                );
                switch (opcion) {
                    case 1:
                        const nombreCliente = rls.question("Ingrese el nombre del cliente: ");
                        const telefonoCliente = rls.questionInt("Ingrese el telefono del cliente: ");
                        redVeterinarias.altaCliente(nombreCliente, telefonoCliente);
                        break;
                    case 2:
                        const idCliente = rls.questionInt("Ingrese el ID del cliente a modificar: ");
                        const nuevoNombreCliente = rls.question("Ingrese el nuevo nombre: ");
                        const nuevoTelefonoCliente = rls.questionInt("Ingrese el nuevo telefono: ");
                        redVeterinarias.modificarCliente(idCliente, nuevoNombreCliente, nuevoTelefonoCliente);
                        break;
                    case 3:
                        const idBajaCliente = rls.questionInt("Ingrese el ID del cliente a eliminar: ");
                        redVeterinarias.bajaCliente(idBajaCliente);
                        break;
                    case 4:
                        const idVisitaCliente = rls.questionInt("Ingrese el ID del cliente para registrar visita: ");
                        redVeterinarias.registrarVisita(idVisitaCliente);
                        break;
                    case 5:
                        console.log("\x1b[32m"); // Cambiar color a verde
                        console.table(redVeterinarias.getClientes());
                        console.log("\x1b[0m"); // Restablecer color
                        break;
                    case 6:
                        console.log("Volviendo al menu principal...");
                        break;
                    default:
                        console.log("Opcion no valida.");
                        break;
                }
            } while (opcion !== 5);
            break;

        case 3: // Pacientes
            do {
                opcion = rls.questionInt(
                    "1: Alta Paciente\n2: Modificar Paciente\n3: Baja Paciente \n4: Ver listado de pacientes \n5: Volver al menu principal\n"
                );
                switch (opcion) {
                    case 1:
                        const nombre = rls.question("Ingrese el nombre del paciente: ");
                        const especie = rls.question("Ingrese la especie del paciente: ");
                        const idDuenio = rls.questionInt("Ingrese el ID del propietario: ");
                        redVeterinarias.altaPaciente(nombre, especie, idDuenio);
                        break;
                    case 2:
                        let id = rls.questionInt("Ingrese el ID del paciente a modificar: ");
                        const nuevoNombre = rls.question("Ingrese el nuevo nombre: ");
                        const nuevaEspecie = rls.question("Ingrese la nueva especie: ");
                        const nuevoIdDuenio = rls.questionInt("Ingrese el nuevo ID del propietario: ");
                        redVeterinarias.modificarPaciente(id, nuevoNombre, nuevaEspecie, nuevoIdDuenio);
                        break;
                    case 3:
                        id = rls.questionInt("Ingrese el ID del paciente a eliminar: ");
                        redVeterinarias.bajaPaciente(id);
                        break;
                    case 4:
                        console.log("\x1b[32m"); // Cambiar color a verde
                        console.table(redVeterinarias.getPacientes());
                        console.log("\x1b[0m"); // Restablecer color
                        break;
                    case 5:
                        return;
                    default:
                        console.log("Opción no válida.");
                }
            } while (opcion !== 4);
            break;

        case 4: // Proveedores
            do {
                opcion = rls.questionInt(
                    "1: Alta Proveedor\n2: Modificar Proveedor\n3: Baja Proveedor \n4: Ver listado de proveedores\n5: Volver al menu principal\n"
                );
                switch (opcion) {
                    case 1:
                        const nombre = rls.question("Ingrese el nombre del proveedor: ");
                        const telefono = rls.questionInt("Ingrese el telefono del proveedor: ");
                        redVeterinarias.altaProveedor(nombre, telefono);
                        break;
                    case 2:
                        let id = rls.questionInt("Ingrese el ID del proveedor a modificar: ");
                        const nuevoNombre = rls.question("Ingrese el nuevo nombre: ");
                        const nuevoTelefono = rls.questionInt("Ingrese el nuevo teléfono: ");
                        redVeterinarias.modificarProveedor(id, nuevoNombre, nuevoTelefono);
                        break;
                    case 3:
                        id = rls.questionInt("Ingrese el ID del proveedor a eliminar: ");
                        redVeterinarias.bajaProveedor(id);
                        break;
                    case 4:
                        console.log("\x1b[32m"); // Cambiar color a verde
                        console.table(redVeterinarias.getProvedor());
                        console.log("\x1b[0m"); // Restablecer color
                        break;
                    case 5:
                        return;
                    default:
                        console.log("Opción no válida.");
                }
            } while (opcion !== 4);
            break;     
            
    }
    
};

// Ejecutar el menú principal
ejecutarMenu();

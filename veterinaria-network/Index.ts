import { RedVeterinarias } from "./src/services/RedVeterinarias";  

const redVeterinarias = new RedVeterinarias();  

redVeterinarias.altaVeterinaria("Veterinaria A", "Calle 123");  
redVeterinarias.altaCliente("Juan Pérez", 123456789);  
redVeterinarias.altaPaciente("Rex", "perro", 1);  
redVeterinarias.altaProveedor("Proveedor A", 987654321);  

console.log(redVeterinarias);
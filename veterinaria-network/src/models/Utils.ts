const existingIds = new Set<number>();  

export function generarIdUnico(): number {  
    let id: number;  
    do {  
        id = Math.floor(Math.random() * 10000); // Generar un ID aleatorio entre 0 y 9999  
    } while (existingIds.has(id)); // Asegurarse de que el ID no exista  
    existingIds.add(id);  
    return id;  
}
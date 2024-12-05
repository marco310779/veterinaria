const IDexistente = new Set<number>();  

export function generarIdUnico(): number {  
    let id: number;  
    do {  
        id = Math.floor(Math.random() * 10000); 
    } while (IDexistente.has(id)); 
    IDexistente.add(id);  
    return id;  
}
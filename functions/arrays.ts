export function embaralhar(elementos: any[]): any[] {
    return elementos
        .map((valor) => {
            return { valor, aleatorio: Math.random() };
        })
        .sort((objeto1, objeto2) => objeto1.aleatorio - objeto2.aleatorio)
        .map((objeto) => objeto.valor);
}

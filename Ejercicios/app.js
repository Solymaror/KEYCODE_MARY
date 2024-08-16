// Función para imprimir las tablas de multiplicar del 1 al 10
function imprimirTablasDeMultiplicar() {
    for (let i = 1; i <= 10; i++) {
        console.log(`Tabla del ${i}:`);
        for (let j = 1; j <= 10; j++) {
            let resultado = i * j;
            console.log(`${i} x ${j} = ${resultado}`);
        }
        console.log("-".repeat(20)); // Separador para las tablas
    }
}

// Ejecutar la función para mostrar las tablas de multiplicar
imprimirTablasDeMultiplicar();



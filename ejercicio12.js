function fibonacci(num) {
    const lista = []
    let valor = 1;
    let acum = 0;
    let suma = 0;
    for (i = 0; i < num; i++) {
        lista.push(valor);
        acum = valor;
        valor = valor + suma;
        suma = acum;
    }
    return lista;
}

let num = 6;
const ejercicio12 = fibonacci(num);
console.log(ejercicio12);
function miFuncion(numeros) {
    let resultado = { pares: [], impares: [] };
    let pares = 0; 
    let impares = 0; 

    for (let n = 0; n < numeros.length; n++) {
        if (numeros[n] % 2 === 0) {
            resultado.pares[pares] = numeros[n];
            pares++;
        } else {
            resultado.impares[impares] = numeros[n];
            impares++;
        }
    }

    return resultado;
}

let obj = miFuncion([1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
console.log(obj);

let obtenerNumero = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(5);
    }, 1000);
});

obtenerNumero
    .then(numero => {
        console.log("Número inicial:", numero);
        return numero * 2;
    })
    .then(numeroMultiplicado => {
        console.log("Número multiplicado por 2:", numeroMultiplicado);
        return numeroMultiplicado + 3;
    })
    .then(resultadoFinal => {
        console.log("Resultado final después de sumar 3:", resultadoFinal);
    })
    .catch(error => {
        console.log("Ocurrió un error:", error);
    })
    .finally(() => {
        console.log("Encadenamiento de promesas finalizado");
    });

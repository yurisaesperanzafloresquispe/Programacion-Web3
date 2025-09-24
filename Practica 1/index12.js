let promesa = (numero) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (numero > 0) resolve(numero * 2);
            else reject("Número no válido");
        }, 1000);
    });
}

promesa(5)
    .then(res => {
        console.log("Primera promesa:", res);
        return promesa(res); 
    })
    .then(res => {
        console.log("Segunda promesa:", res);
        return promesa(res); 
    })
    .then(res => {
        console.log("Tercera promesa:", res);
    })
    .catch(err => {
        console.log("Error:", err);
    })
    .finally(() => {
        console.log("Proceso terminado");
    });

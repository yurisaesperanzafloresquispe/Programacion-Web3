let promesa = (numero) => {
    return new Promise((resolve, reject) => {
        if (numero > 0) {
            resolve("Éxito con el número " + numero);
        } else {
            reject("Error: el número no es válido");
        }
    });
};

let promesaACallback = (numero, callback) => {
    promesa(numero)
        .then(res => callback(null, res))   
        .catch(err => callback(err, null)); 
};

promesaACallback(5, (err, res) => {
    if (err) console.log("Error:", err);
    else console.log("Resultado:", res);
});

promesaACallback(-3, (err, res) => {
    if (err) console.log("Error:", err);
    else console.log("Resultado:", res);
});

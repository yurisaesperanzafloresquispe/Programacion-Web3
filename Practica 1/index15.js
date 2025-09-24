
let sumar = (a, b, callback) => {
    setTimeout(() => {
        let resultado = a + b;
        callback(resultado);
    }, 1000); 
};
let sumarPromesa = (a, b) => {
    return new Promise((resolve, reject) => {
        sumar(a, b, (resultado) => {
            if (resultado !== undefined) resolve(resultado);
            else reject("Error en la suma");
        });
    });
};

sumarPromesa(5, 3)
    .then(res => console.log("Resultado:", res))
    .catch(err => console.log(err));

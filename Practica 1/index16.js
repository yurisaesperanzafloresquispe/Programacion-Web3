let duplicar = (numero) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (numero > 0) resolve(numero * 2);
            else reject("Número no válido");
        }, 1000);
    });
}

let procesar = async () => {
    try {
        let res1 = await duplicar(5);
        let res2 = await duplicar(res1);
        let res3 = await duplicar(res2);
        console.log("Resultado final:", res3);
    } catch(err) {
        console.log("Error:", err);
    }
}

procesar();

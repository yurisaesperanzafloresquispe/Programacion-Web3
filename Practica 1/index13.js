let promesa = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num * 2), 1000);
    });
}

let procesar = async () => {
    try {
        let res1 = await promesa(5);
        let res2 = await promesa(res1);
        let res3 = await promesa(res2);
        console.log("Resultado final:", res3);
    } catch(err) {
        console.log("Error:", err);
    }
}

procesar();

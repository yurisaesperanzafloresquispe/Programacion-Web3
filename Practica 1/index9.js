let promesaExito = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("¡Éxito! Han pasado 3 segundos");
    }, 3000);
});

promesaExito
    .then(res => { 
        console.log(res);
    })
    .catch(err => {
        console.log(`error`, err);
    }) 
    .finally(() => {
        console.log("Promeso finalizada");
    }); 

let miFuncion = (numeros) => {
    let mayor = numeros[0]; 
    let menor = numeros[0]; 

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
        else if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }

    return { mayor: mayor, menor: menor };
};

let obj = miFuncion([3, 5, 4, 2,6,8,10]);
console.log(obj); 

function miFuncion(texto) {
    let resultado = "";
    
    for (let i = texto.length - 1; i >= 0; i--) {
        resultado = resultado + texto[i];
    }

    return resultado;
}

let cad = miFuncion("hola como estas esperanza");
console.log(cad);

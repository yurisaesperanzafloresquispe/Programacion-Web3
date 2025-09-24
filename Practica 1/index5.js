let Palindromo = (texto) => {
    let invertido = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        invertido = invertido+texto[i];
    }
    return texto === invertido;
}

let band = Palindromo("oruro");
console.log(band); 

band = Palindromo("banda");
console.log(band); 

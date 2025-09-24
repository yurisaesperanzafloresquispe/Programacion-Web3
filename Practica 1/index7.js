let tomarResto = (arreglo) => {
    let [primero, segundo,terceto, ...resto] = arreglo;
    return { primero, segundo,terceto, resto };
}

let resultado = tomarResto([5, 8, 12, 20, 3, 9]);
console.log(resultado);


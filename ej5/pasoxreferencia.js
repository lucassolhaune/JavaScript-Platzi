//tipo de dato complejo -> paso por referencia

let frutas = {
    naranja: '🍊'
}
let verduras = frutas // Naranja va a ser brocoli porque son el mismo objeto

verduras.naranja = '🥦'
console.log(frutas)
//----------------------

let ropa = {
    remera:'blue'
}

ropa.pantalon = 'red'
console.log(ropa)





//Funciones puras e impuras

//Side effects
//1. modificar variables globales
//2. modificar parametros
//3.solicitudes http
//4. impresion mensajes en pantalla o consola
//5. manipulacion del DOM
//6. obtener la hora actual.

function sum (a, b){
    return a + b
}

//Funcion impura  -> porque tenemos un efecto secundario
function sum (a, b){
    console.log("A:"+ a)
        return a + b
}

let total = 0

function sumWithSideEffect (a){
    total += a
    return total
}
//Funcion pura -> no tiene efectos secundarios
function square(x){
    return x * x
}

function addTen(y){
    return y + 10
}

const number = 5
const finalResult = addTen(square(number))
console.log(finalResult) // me devuelve 35 addTen = 10, square = x*x (5*5), number es 5

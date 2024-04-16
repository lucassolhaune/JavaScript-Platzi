//Tipo entero y decimal

const entero = 42
const decimal = 3.12
console.log(typeof entero, typeof decimal) //  ambos de tipo number

//Notacion cientifica

const cientifico = 5e3

//Num infinito y Nan
const infinito = Infinity //Numero infinito
const noeEsNUmber = NaN //No es un numero

//Oeraciones aritmeticas

const suma = 3 + 4
const resta = 5 - 2
const div = 10/2
const multup = 5 * 2
console.log(suma, resta, div, multup)

//Modulo y exponenciacion
const modulo = 15 % 8
const exponenciacion = 2 ** 3 //Multiplo

//Precision 
const result = 0.1 + 0.2
console.log(result) //Valor no preciso
console.log(result.toFixed(1)) //Valor preciso porque le indicamos cuantos numeros despues de la coma
console.log(result === 0.3) //Comprueba si el valor 0.30000000000000004 es igual a 0.3 de numero y de tipo, te devuelve un bool sea true o false

//Operaciones avanzadas 
const raizCuad = Math.sqrt(16) //Calcula la raiz cuadrada del numero que ponemos entre parentesis
const valorAbs = Math.abs(-50) //Valor absoluto de cualquier numero
const numRandom = Math.random()
console.log(raizCuad, valorAbs, numRandom)











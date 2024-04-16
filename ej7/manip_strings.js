//Strigs primitivos

const stringPrim = 'Soy un string primitivo'
console.log(typeof stringPrim)


const stringPrimTambien = String('Soy un string primitivo')
console.log(typeof stringPrimTambien)


//String Objeto
const stringObj = new String ('Soy un string objeto')
console.log(typeof stringObj)

//Acceder a caracteres
const saludo = "Hola ¿Como estas?"
console.log(saludo[2]) //Devuelve que hay en la posicion [2] = "l"
console.log(saludo.charAt(2)) //Devuelve que hay en la posicion [2] = "l"
console.log(saludo.indexOf('o')) //Devuelve la primer "O"
console.log(saludo.indexOf('Como'))//Devuelve del lugar donde empieza la palabra "Como"
console.log(saludo.indexOf('como'))//Analiza el texto y devuelve que la palabra no existe = -1
console.log(saludo.lastIndexOf('o'))//Me devuelve la ultima "O" que esta escrita en el texto
console.log(saludo.slice(3, 5))//Devuelve las letras que hay en el string, recibe dos parametros(numeros).
console.log(saludo.length)//Devuelve el tamaño del string
console.log(saludo.toLocaleLowerCase()) // Devuelve el stirng en minuscula
console.log(saludo.toLocaleUpperCase()) //Devuelve el string en mayuscula

const saludoDiv = saludo.split(' ') 
console.log(saludoDiv) //Te devuelve el saludo dividio por arrays por el split (' ')
console.log(saludoDiv[1]) //Te devuelve lo que tiene la primer posicion = "¿Como"



const saludoConEspacios = ' Hola mundo '
const saludoSinEspacios = saludoConEspacios.trim() //Le quita los espacio del inicio y final ' Hola Mundo '
console.log(saludoSinEspacios)

const saludoOriginal = 'Hola mundo'
const nuevoSaludo = saludoOriginal.replace('mundo', 'PEPE') //Reemplaza mundo por 'PEPE'
console.log(nuevoSaludo)









//Creacion de strings y conctaenacion de los mismos
const primeraOpcion = "Hola"
const segundaOpcion = `Hola`
const terceraOpcion = 'Hola'

//Concatenacion: opcion: +
const direcc = "calle: calle 1234"
const ciudad = "Rosario"
const direccCompleta = "Mi direccion completa es: " + direcc + ", " + ciudad
console.log(direccCompleta)

//Concatenacion: Template literals
const nombre = "Lucas"
const pais = "Argentina"
const presentacion = `Hola, mi nombre es ${nombre} soy de ${pais}`
console.log(presentacion)

//Concatenacion: Join()
const primeraParte = 'Me encanta'
const segundaParte = 'la gente de'
const terceraParte = 'España'
const pensamiento = [primeraParte, segundaParte, terceraParte]
console.log(pensamiento.join(' '))

//Concatenacion: concat()
const hobbie1 = 'jugar'
const hobbie2 = 'leer'
const hobbie3 = 'estudiar'
const hobbies = 'Mis hobbies son: '.concat(hobbie1,', ', hobbie2,', ', hobbie3)
console.log(hobbies)

const espacio = "--------------------------------------------------"
console.log(espacio)



//EScritura de Sring largos

/*
Las rosas son rojas,
las violetas son azules,
caracter inesperado,
en la linea 86
*/
const poema1 =   'Las rosas son rojas,\n' + 
                'Las violetas son azules,\n' +
                'caracter inesperado \n' +
                'En la linea 86. \n'
console.log(poema1)
                    

console.log(espacio)


const poema2 =  'Las rosas son rojas,\n\
 Las violetas son azules,\n\
caracter inesperado \n\
En la linea 86.'
console.log(poema2)


console.log(espacio)


const poema3 =  `Las rosas son rojas,
 Las violetas son azules,
caracter inesperado 
En la linea 86.`
console.log(poema3)


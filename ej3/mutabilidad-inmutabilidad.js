//tipo de dato primitivo -Inmutable
let numero = 20
numero = numero + 10
console.log(numero)

let isTrue = true
isTrue = false
console.log(isTrue)

//tipo de dato complejo- Mutable
let usuario = { nombre: 'Lucas', edad: 24}
usuario.edad = 25
console.log(usuario)

let frutas = ['naranja', 'pera']
frutas[0] = 'sandia'
console.log(frutas)

function changeName (objeto){ // Funcion para cambiar el nombre que tengo definido en la variable de abajo con el nombre 'Jorge'
    objeto.nombre = 'New Name'
}

let persona = {nombre: 'Jorge'}
changeName(persona)

console.log(persona)
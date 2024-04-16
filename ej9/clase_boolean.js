//boolean
const isActive = true
const hasPermission = false

//Conversion implicita
const result = 5 > 3 //devuelve true -> bool
console.log(result)

const name = 'Platzi'
console.log(!!name) // forma para saber si existe ese nombre devuelve true

//explicita
const value = 0 //Da false porque "no tiene nada"
const otherValue = 24 //da true porque contiene "algo"
const explicitValue = Boolean(otherValue)
console.log(explicitValue)

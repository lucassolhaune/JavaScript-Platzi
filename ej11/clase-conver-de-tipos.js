//Explicit type casting

const string = '42'
const integer = parseInt(string) //con parseInt conv
console.log(integer)
console.log(typeof integer)


const stringDecimal = '3.14'
const float = parseFloat(stringDecimal)
console.log(float)
console.log(typeof float)


//Implicit type casting

const sum = '5' + 3
console.log(sum)

const sumWithBoolean = '3' + true
console.log(sumWithBoolean)

const sumWithNumber = 2 + true
console.log(sumWithNumber)


const stringValue = '10'
const numberValue = 10
const booleanValue = true

console.log("--------------------------------")
console.log(stringValue + stringValue) //concatena
console.log(stringValue + numberValue) //concatena
console.log(stringValue + booleanValue)//concatena
console.log("--------------------------------")
console.log(numberValue + numberValue) //suma
console.log(numberValue + stringValue) //concatena
console.log(numberValue + booleanValue) //suma
console.log("--------------------------------")
console.log(booleanValue + stringValue) //concatena
console.log(booleanValue + numberValue) //suma
console.log(booleanValue + booleanValue) //suma

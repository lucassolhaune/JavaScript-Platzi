const greeting = function (name){
    return `Hi, ${name}`
}
//arrow function -> explicit return
const newGreeting = (name) => {
    return `Hi, ${name}`
}

//arrow function -> implicit return
const newGreetingImplicit = name => `Hi, ${name}`

const newGreetingImplicitWithTwoParameters = (name, lastName) => `Hi, i'm ${name} ${lastName}`

//lexical binding

const finctionalCaracter = {
    name: 'Lucas',
    messageWithTraditionalFunction: function (message){
        console.log(`${this.name} says: ${message}`)
        },
    messageWithArrowFunction: (message) => {
        console.log(`${this.name} says: ${message}`)
    }
}

finctionalCaracter.messageWithTraditionalFunction ('Me encantan las hamburguesas')
finctionalCaracter.messageWithArrowFunction ('Me encantan los animales')
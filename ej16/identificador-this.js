//Enlace implicito - implicit binding




//Objeto n°1

const house = {
    dogName: "Bruno",
    dogGreeting: function(){
        console.log(`Hi, i'm ${this.dogName}`) //this acceso al objeto donde esta vinculado la funcion
    }
}
house.dogGreeting() //llamo a la funcion dogGretting y me devuelve el console.log con el nombre "Bruno"

//-----------------------------------




//Objeto n°2

const newHouse = {
    dogName: "Coconut", 
    dogAge: 3
}
function dogGreeting(){
        console.log(`Hi, i'm ${this.dogName}`) //this acceso al objeto donde esta vinculado la funcion
}
dogGreeting.call(newHouse) //llamo a la funcion dogGretting y me devuelve el console.log con el nombre "Coconut"





//-----------------------------------

//Objeto n°3

const owner = "Lucas"
const adress = "calle 1234"
function newDogGreeting(owner, adress){
    console.log(`Hi, iam ${this.dogName} and i live with ${owner} on ${adress}`)
}
newDogGreeting.call(house, owner, adress)  //llamo a la funcion dogGretting y me devuelve el console.log con el nombre "Lucas y la direccion" y el nombre del perro que yo le indique por el objeto


//Capacidades que tienen las funciones al igual que otros objetos

//1. Pasar funciones como aurgumentos = callback
function a() {
}
function b(a) {
}
b(a)

//Retornar funciones

function a() { //-> esto se conoce como declaracion de funcion
    function b(){}
    return b
}

//Asignar funciones a variables -> expresion de funcion

//const a = function (){ //El nombre de la funcion desaparece y lo dejamos a cargo de la variable 
//}
//Tener propiedadaes y metodos
function a (){
}
const obj = {
}
a.call(obj)

//Anidar funciones -> nestd functions

function a (){
        function b (){
            function c (){

            }
            c()
        }
        b()
}
a() //formas de llamar funciones dentra de las mismas
//Desde cualquier funcion puedo llamar otras funciones.






//Es posible almacenar funciones en objetos?
const rocket = { //Objeto
    name: "falcon", //Propiedades
    color: "Blue",//Propiedades
    launchMessage: function launchMessage (){ //Dentro de esta propiedad cree una funcion
        console.log("Despegueeeeee")
    }
}
rocket.launchMessage() //Ejecute la funcion